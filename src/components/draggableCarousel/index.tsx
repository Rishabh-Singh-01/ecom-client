'use client';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

function DraggableCarousel({
  children,
  slidesToShow,
  hasDots,
  scrollLock,
}: {
  children: JSX.Element[];
  slidesToShow: number;
  hasDots?: boolean;
  scrollLock?: boolean;
}) {
  return (
    <Glider
      draggable
      slidesToShow={slidesToShow || 2}
      slidesToScroll={1}
      hasDots={hasDots || false}
      scrollLock={hasDots || false}
    >
      {children.map((child: JSX.Element) => child)}
    </Glider>
  );
}

export default DraggableCarousel;
