import Link from 'next/link';
import styles from './styles.module.css';

export default function LoginRedirection() {
  return (
    <div className={styles.loginRedirection}>
      <div className={styles.loginRedirectionFig}>(┬┬﹏┬┬)</div>
      <div className={styles.loginRedirectionMsg}>
        Looks like you are not logged in for checkout process
      </div>
      <Link href={'/login'} className={styles.loginRedirectionBtn}>
        <span className='material-symbols-outlined'>login</span>
        Login
      </Link>
    </div>
  );
}
