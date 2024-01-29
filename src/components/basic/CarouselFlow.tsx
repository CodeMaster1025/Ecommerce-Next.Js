
import { Carousel } from 'flowbite-react';

export default function CarouselFlow() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[512px] bg-opacity-0 overflow-hidden">
      <Carousel leftControl=" " rightControl=" " indicators={false} slideInterval={2000}>
        <img src="https://source.unsplash.com/featured/960x540?skirts" alt="..." />
        <img src="https://source.unsplash.com/featured/960x540?dresses" alt="..." />
        <img src="https://source.unsplash.com/featured/960x540?blouses" alt="..." />
        <img src="https://source.unsplash.com/featured/960x540?Pants" alt="..." />
        <img src="https://source.unsplash.com/featured/960x540?Scarf" alt="..." />
      </Carousel>
    </div>
  );
}
