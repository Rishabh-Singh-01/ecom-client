import heroImg from '../../../../public/heroImage.png';
import styles from './product.module.css';
import { PaddingBottomRoutePages } from '@/components/Utils/paddingBottom';
import { populateSingleProduct } from '@/common/populateData/singleProduct';
import Image from 'next/image';
import DraggableCarousel from '@/components/draggableCarousel';
import {
  AddToCartBtn,
  ProductSizeBtns,
  WishlistBtn,
} from '@/components/productPage';
import { populateCartItemsData } from '@/common/populateData/cartItems';
import { ProductFromCartInterface } from '@/common/models/cartIntefaces';
import isValidCartItemsData from '@/common/utils/cartItemDataTypeGuard';

// :TODO(p) -- change the heroImg and make the dynamic images using aws s3 & also set the image to optimal sizes for their best usecases
// :TODO(p) -- refactor this code into their particular componeents

// function getFixedExtraServicesObj() {
//   const extraServicesObj = [
//     {
//       icon: 'local_shipping',
//       serviceStatement: 'Free shipping',
//     },
//     {
//       icon: 'workspace_premium',
//       serviceStatement: 'Quality Checked',
//     },
//     {
//       icon: 'payments',
//       serviceStatement: 'Pay on Delivery available',
//     },
//     {
//       icon: 'currency_exchange',
//       serviceStatement: 'Moneyback Gaurantee Return',
//     },
//   ];
//   return extraServicesObj;
// }

function calculateTotalOff(prevPrice: number, currPrice: number) {
  const relativeChange = (prevPrice - currPrice) / prevPrice;
  return (relativeChange * 100).toFixed(0);
}

// params: productId and cartItemsData
// returns : array of sizes name or empty array in case of unauth/error
function getCurrentSizeAddedInCartFromProduct(
  productId: string,
  cartItemsData:
    | {
        data: [ProductFromCartInterface];
      }
    | {
        status: string;
        message: string;
      }
) {
  const addedSizes: string[] = [];
  if (isValidCartItemsData(cartItemsData)) {
    for (const item of cartItemsData.data) {
      if (item.product_id === productId) addedSizes.push(item.size_name);
    }
  }
  return addedSizes;
}

export default async function Product({ params }: { params: { id: string } }) {
  // const { data } = await populateSingleProduct(params.id);

  // fetching all the necessary details in one go
  const [{ data }, cartItemsData] = await Promise.all([
    populateSingleProduct(params.id),
    populateCartItemsData(),
  ]);

  // storing the current size that is added in cart for rendered product
  const sizesAddedInCartForProduct = getCurrentSizeAddedInCartFromProduct(
    params.id,
    cartItemsData
  );

  return (
    <div className={styles.singleProduct}>
      <PaddingBottomRoutePages backgroundColor={'inherit'} />
      <article className={styles.singleProductMain}>
        <DraggableCarousel slidesToShow={1} hasDots scrollLock>
          <div className={styles.productImage}>
            <div className={styles.heroImage}>
              <Image
                src={heroImg}
                alt='Image for header'
                priority
                className={styles.img}
                // sizes='(max-width: 768px) 100vw,
                //         (max-width: 1200px) 50vw,
                //         33vw'
              />
            </div>
          </div>
          <div className={styles.productImage}>
            <div className={styles.heroImage}>
              <Image
                src={heroImg}
                alt='Image for header'
                priority
                className={styles.img}
                // sizes='(max-width: 768px) 100vw,
                //         (max-width: 1200px) 50vw,
                //         33vw'
              />
            </div>
          </div>
          <div className={styles.productImage}>
            <div className={styles.heroImage}>
              <Image
                src={heroImg}
                alt='Image for header'
                priority
                className={styles.img}
                // sizes='(max-width: 768px) 100vw,
                //         (max-width: 1200px) 50vw,
                //         33vw'
              />
            </div>
          </div>
        </DraggableCarousel>
        <div className={styles.productDetails}>
          <div className={styles.productInfoContainer}>
            <h3 className={`headingTertiaryLarge ${styles.productInfoTitle}`}>
              White Tee based on life journey of Yohan from Monster
            </h3>
            <div className={styles.productInfoPrice}>
              <span className={styles.productInfoPriceMrp}>MRP:</span>
              <span className={styles.productInfoPreviousPrice}>
                &#8377;{data.at(0)?.previous_price}
              </span>
              <span className={styles.productInfoCurrentPrice}>
                &#8377;{data.at(0)?.price}
              </span>
              <span className={styles.productInfoTotalOff}>
                {`${calculateTotalOff(
                  data.at(0)?.previous_price!,
                  data.at(0)?.price!
                )} % OFF`}
              </span>
            </div>
          </div>
          <div className={styles.productSizeContainer}>
            <div className={styles.productSizeHeading}>
              <span>Select Size</span>
              <span className={styles.productSizeChart}>Size Chart</span>
            </div>
            <div className={styles.productAllSizesAvailable}>
              {data.map((prd) => (
                <ProductSizeBtns
                  size={prd.size_name}
                  productId={params.id}
                />
              ))}
            </div>
          </div>
          <div className={styles.productDescContainer}>
            <span className={styles.productDescSubHeading}>
              Product Details
            </span>
            <div className={styles.productDescDetails}>
              <span>Theme</span>
              <p className={styles.productDescDetailsThemePara}>
                {data.at(0)?.description}
              </p>
            </div>
            <div className={styles.productDescFabrics}>
              <span>Fabric</span>
              <ul className={styles.productDescFabricList}>
                {data
                  .at(0)
                  ?.fabric.split('#')
                  .map((fb, i) => (
                    <li key={`Product-${data.at(0)?.name}-fabricType-${i + 1}`}>
                      <i>
                        {`${fb.concat('%').split(':').at(-1)} ${fb
                          .split(':')
                          .at(0)}`}
                      </i>
                    </li>
                  ))}
              </ul>
            </div>
            <div className={styles.productDescSizeFit}>
              <span>Size/Fit</span>
              <ul className={styles.productDescSizeFitList}>
                <li>Slim Fit</li>
                <li>Model (height 6') is wearing M size. </li>
              </ul>
            </div>
          </div>
          <div className={styles.productExtraServicesContainer}>
            <span className={styles.productDescSubHeading}>
              Services Just For You !!
            </span>
            <ul className={styles.productExtraServiceList}>
              <li className={styles.productExtraServiceListItem}>
                <span className='material-symbols-outlined'>
                  local_shipping
                </span>
                Free shipping
              </li>
              <li className={styles.productExtraServiceListItem}>
                <span className='material-symbols-outlined'>
                  workspace_premium
                </span>
                Quality Checked
              </li>
              <li className={styles.productExtraServiceListItem}>
                <span className='material-symbols-outlined'>payments</span>Pay
                on Delivery available
              </li>
              <li className={styles.productExtraServiceListItem}>
                <span className='material-symbols-outlined'>
                  currency_exchange
                </span>
                Moneyback Guarantee Return
              </li>
            </ul>
          </div>
        </div>
      </article>
      <PaddingBottomRoutePages backgroundColor={'inherit'} />
      <div className={styles.ctaButtons}>
        <WishlistBtn />
        <AddToCartBtn
          productId={params.id}
          sizesAddedInCart={sizesAddedInCartForProduct}
        />
      </div>
    </div>
  );
}
