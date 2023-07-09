// 'use client';
import Link from 'next/link';
import style from './page.module.css';
import Image from 'next/image';
import GoogleSVG from '../../../public/google.svg';
import { PaddingBottomRoutePages } from '@/components/Utils/paddingBottom';

export default function Login() {
  // const googleAuthDirect = () => {
  //   redirect(`${process.env.SERVER_SIDE_URL}/google/auth`);
  // };

  return (
    <div className={style.login}>
      <PaddingBottomRoutePages backgroundColor={'inherit'} />
      <div className={style.loginMsg}>
        <p className={style.loginMainMsg}>Enter the Madness of AnimeVerse !!</p>
        <p className={style.loginSubMsg}>Please choose an option to sign up</p>
      </div>
      <Link
        className={style.googleLoginBtn}
        href={`${process.env.SERVER_SIDE_URL}/api/v1/auth/google`}
      >
        <Image
          src={GoogleSVG}
          alt='google logo'
          className={style.loginBtnLogo}
        />
        Sign in with Google
      </Link>
      <div className={style.loginFig}>(❁´◡`❁)</div>
    </div>
  );
}
