import { cookies } from 'next/headers';
import style from './page.module.css';
import { PaddingBottomRoutePages } from '@/components/Utils/paddingBottom';
import { SavedProductCard } from '@/components/savedProductCard';
import {
  AllProductsFromCartInterface,
  ProductFromCartInterface,
} from '@/common/models/cartIntefaces';
import { CartSummary } from '@/components/cartSummary';
import LoginRedirection from '@/components/loginRedirection';

async function getData() {
  const res = await fetch(`${process.env.SERVER_SIDE_URL}/api/v1/cart`, {
    credentials: 'include',
    // TODO(l) :  Change the caching and make sure the cookies arenot send due to cache even after they disappear;
    cache: 'no-cache',
    headers: {
      Cookie: cookies().toString(),
    },
  });
  if (res.status === 200) return res.json();
  if (res.status === 401)
    return {
      status: 'unauthorized',
      message: 'Please login first!',
    };
  throw new Error('Something went wrong' + res.statusText);
}

function getTotalSelectedProductPrice(data: [ProductFromCartInterface]) {
  return data.reduce(
    (accumulator, product) => accumulator + product.quantity * product.price,
    0
  );
}

export default async function Cart() {
  // TODO(p) : Think about the architecture if we want to fetch data every time or persist using context/redux;
  // fetching user info
  // const user = await getUser();
  const cartData: AllProductsFromCartInterface = await getData();
  console.log(cartData);
  if (cartData.status === 'unauthorized') {
    return <LoginRedirection />;
  }

  const { data } = cartData.data;
  const productPrice = getTotalSelectedProductPrice(data);
  console.log(getTotalSelectedProductPrice(data));
  return (
    <div className={style.shoppingCartPageContainer}>
      <section className={style.shoppingCartPage}>
        <PaddingBottomRoutePages backgroundColor={'inherit'} />
        <h2 className='headingSecondary'>Order Details</h2>
        {data.map((product, i: number) => (
          // :TODO(p) -- Think about the incorpotation of size on the carts
          <SavedProductCard key={i} product={product} />
        ))}
      </section>
      <CartSummary productPrice={productPrice} />
    </div>
  );
}
