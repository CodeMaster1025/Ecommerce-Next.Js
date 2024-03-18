import Image from 'next/image'
import { useRouter } from 'next/router';

export default function FooterLogo() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <Image onClick={handleClick}
      src="/FOOTER-LOGO.png"
      width={200}
      height={200}
      alt="GIOM LOGO"
    />
  )
}
