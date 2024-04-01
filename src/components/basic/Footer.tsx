import Link from "next/link";
import FooterLogo from "../ui/FooterLogo";

const Footer = (): JSX.Element => {
  return (
    <footer
      id="footer"
      className="flex justify-center bg-opacity-50 bg-tertiary item-center"
    >
      <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="#" className="">
              <span className="hidden md:flex">
                <FooterLogo />
              </span>

              <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 uppercase sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-2 font-bold uppercase text-md">Redes</h2>
              <ul className="text-xs">
                <li className="mt-2">
                  <Link href="" className="hover:underline ">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:underline">
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:underline">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-bold uppercase text-md">Legal</h2>
              <ul className="text-xs">
                <li className="mt-2">
                  <Link href="#" className="hover:underline">
                    Politica de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Termos &amp; Condições
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-bold uppercase text-md">
                Quer divulgar a marca?
              </h2>
              <ul className="text-xs">
                <li className="mt-2">
                  <Link href="#" className="hover:underline">
                    Politica de colaboradores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sobre nos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-bold uppercase text-md">Parceiros</h2>
              <ul className="text-xs">
                <li className="mt-2">
                  <Link href="#" className="hover:underline">
                    Empresas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Influenciadores
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2024{" "}
            <Link href="" className="hover:underline">
              Leonardo™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
