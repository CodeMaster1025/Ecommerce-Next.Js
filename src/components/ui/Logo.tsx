import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Logo() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
      <Image onClick={handleClick} className='w-auto h-auto hover:cursor-pointer'
        src="/GIOM2.png"
        width={175}
        height={175}
        placeholder="blur"
        blurDataURL={'/GIOM2.png'}
        priority={true}
        alt="GIOM LOGO"
      />
    );
}
