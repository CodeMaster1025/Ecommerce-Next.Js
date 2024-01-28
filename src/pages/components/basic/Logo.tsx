import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Logo() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div onClick={handleClick}>
      <Image
        src="/GIOM2.png"
        width={250}
        height={250}
        alt="GIOM LOGO"
      />
    </div>
  );
}
