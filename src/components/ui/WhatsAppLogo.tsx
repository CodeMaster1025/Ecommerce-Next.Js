import Image from 'next/image';
import { useRouter } from 'next/router';

export default function WhatsAppLogo() {
    const router = useRouter();
    const message = 'Olá, gostaria de saber mais informações sobre os produtos da GIOM.';

    const handleClick = () => {
        router.push(`https://api.whatsapp.com/send/?phone=5585996062620&text=${message}&type=phone_number&app_absent=0`)};

    return (

        <span className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#25D366] rounded-full shadow-xl fixed bottom-6 right-6'>
                <Image onClick={handleClick} className='w-6 md:w-8 opacity-75 hover:cursor-pointer'
                    src="/whats2.svg"
                    width={100}
                    height={100}
                    placeholder="blur"
                    blurDataURL={'/whats2.svg'}
                    priority={true}
                    alt="GIOM LOGO"
                />
        </span>
    )
}
