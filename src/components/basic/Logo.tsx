import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Logo() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div onClick={handleClick}>
      <Image className='w-auto h-auto'
        src="/GIOM2.png"
        width={250}
        height={250}
        placeholder="blur"
        blurDataURL={'/GIOM2.png'}
        priority={true}
        alt="GIOM LOGO"
      />
    </div>
  );
}
