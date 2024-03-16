
import { Carousel } from 'flowbite-react';
interface CarouselGridProps {
  src: string[];
}
const CarouselGrid = ({ src }: CarouselGridProps) => {
  return (
    <div className='flex items-center justify-center mt-8 md:mt-16 overflow-hidden'>
      <div className="h-24 sm:h-64 xl:h-80 2xl:h-96 w-[75%]">
        <Carousel leftControl="" rightControl="" indicators={false}>
          {src.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index}`} />
          ))}
        </Carousel>
      </div>
    </div>

  );
}
export default CarouselGrid;
