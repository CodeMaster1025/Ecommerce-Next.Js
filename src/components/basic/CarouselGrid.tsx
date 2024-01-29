
import { Carousel } from 'flowbite-react';

export default function CarouselGrid() {
  return (
    <div className='flex items-center justify-center mt-8 overflow-hidden'>
      <div className="h-24 sm:h-64 xl:h-80 2xl:h-96 w-[75%]">
        <Carousel leftControl=" " rightControl=" " indicators={false}>
          <img src="https://source.unsplash.com/featured/960x540?price discount porcentage fashion" alt="..." />
        </Carousel>
      </div>
    </div>

  );
}
