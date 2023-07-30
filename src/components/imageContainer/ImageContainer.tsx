import styles from './imageContainer.module.css';
import Image from 'next/image';
import heroImg from '../../../public/heroImage.png';

export function ImageContainer() {
  return (
    <div className={styles.imgContainer}>
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
  );
}
