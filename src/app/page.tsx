import heroImg from '../../public/heroImage.png';
import mush from '../../public/mush.png';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ProductInfoCartList } from '@/components/productInfoCartList';
import { PaddingBottomRoutePages } from '@/components/Utils/paddingBottom';
import {
  populateAllThemes,
  populateBestDeals,
} from '@/common/populateData/landingPage';

export default async function Home() {
  const populateBestDealsPromise = populateBestDeals();
  const populateAllThemesPromise = populateAllThemes();

  const [{ data }, { data: themeData }] = await Promise.all([
    populateBestDealsPromise,
    populateAllThemesPromise,
  ]);

  const listItems: JSX.Element[] = themeData.map(
    ({ title }, i: number): JSX.Element => {
      return (
        <li key={`AllThemes-${title}-${i + 1}`}>
          <Link href={`/products?theme=${title}`}>
            <figure className={styles.verseFigure}>
              <Image
                src={mush}
                alt='Image for figure'
                priority
                className={styles.verseFigureImage}
              />
              <figcaption className={styles.verseFigureCaption}>
                {title}
              </figcaption>
            </figure>
          </Link>
        </li>
      );
    }
  );
  return (
    <>
      <main className={styles.landingPage}>
        <PaddingBottomRoutePages backgroundColor={'#e6e0f5'} />
        <section className={styles.hero}>
          <div className={styles.heroDescription}>
            <span className={styles.heroTagline}>
              {`Our Editor's Special Pick`}
            </span>
            <h1 className='headingPrimary'>Where Anime meets Fashion</h1>
            <p className={styles.heroText}>
              Experience the perfect blend of creativity, quality, and
              affordability from our Anime & Manga collection
            </p>
            <Link
              className={`${styles.heroButton} ${styles.heroButtonMain}`}
              href='/'
            >
              Shop Now
            </Link>
            <Link
              className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
              href='/'
            >
              View others &darr;
            </Link>
          </div>
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
        </section>

        <section className={styles.categoryByVerses}>
          <h2 className='headingSecondary'>Get Emersed in our Animeverse</h2>
          <ul className={`${styles.pickOurVerse} grid grid--2-cols`}>
            {listItems}
          </ul>
        </section>

        <section className={styles.bestDeals}>
          <h2 className='headingSecondary'>{`Today's Best Deals For You`}</h2>
          <ProductInfoCartList data={data} />
        </section>

        <section>
          <h2 className='headingSecondary'>Services Just For You</h2>
          <div className={styles.servicesProvidedContainer}>
            <div className={styles.serviceProvidedIm}>
              <Image
                src={heroImg}
                alt='Image for header'
                priority
                className={styles.img}
              />
            </div>
            <div>
              <span>100% Free Delivery</span>
              <p>Get your favourite piece without any extra cost</p>
            </div>
          </div>
          <div>Servi</div>
          <div>Servi</div>
          <div>Servi</div>
        </section>

        <div>Him her section</div>
        <div>Extra Section</div>
      </main>
    </>
  );
}
