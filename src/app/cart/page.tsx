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
import { populateCartItemsData } from '@/common/populateData/cartItems';
import isValidCartItemsData from '@/common/utils/cartItemDataTypeGuard';

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
  const cartItemsData = await populateCartItemsData();
  console.log(cartItemsData);

  // :TODO(l) -- make seperate case for unauth and internal server errors instead of all to login page
  if (!isValidCartItemsData(cartItemsData)) return <LoginRedirection />;

  const { data } = cartItemsData;
  const productPrice = getTotalSelectedProductPrice(data);
  console.log(getTotalSelectedProductPrice(data));
  return (
    <div className={style.shoppingCartPageContainer}>
      <section className={style.shoppingCartPage}>
        <PaddingBottomRoutePages backgroundColor={'inherit'} />
        <h2 className='headingSecondary'>Order Details</h2>
        {data.map((product, i: number) => (
          // :TODO(done) -- Think about the incorpotation of size on the carts
          <SavedProductCard key={i} product={product} />
        ))}
      </section>
      <CartSummary productPrice={productPrice} />
    </div>
  );
}
