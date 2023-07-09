import { Rubik } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/runningMarginals/header';

export const metadata = {
  title: 'E Commerce',
  description: 'E Commerce website',
};

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
