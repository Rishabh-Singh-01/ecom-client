import { PaddingBottomRoutePages } from '@/components/Utils/paddingBottom';
import { ProductInfoCartSkeleton } from '@/components/productInfoCart';

export default function Loading() {
  return (
    <div>
      <PaddingBottomRoutePages backgroundColor={'inherit'} />
      <div className='grid grid--2-cols' style={{ padding: '0 2.4rem' }}>
        <ProductInfoCartSkeleton />
        <ProductInfoCartSkeleton />
        <ProductInfoCartSkeleton />
        <ProductInfoCartSkeleton />
        <ProductInfoCartSkeleton />
        <ProductInfoCartSkeleton />
      </div>
    </div>
  );
}
