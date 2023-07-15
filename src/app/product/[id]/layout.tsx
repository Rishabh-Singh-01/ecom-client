import { ProductProvider } from '@/common/context/productStore';

export default function ProductLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <ProductProvider>{children}</ProductProvider>;
}
