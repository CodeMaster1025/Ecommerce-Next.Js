import Script from "next/script";
import Logo from "../ui/Logo";
import { useContext, useEffect, useState } from "react";
import CartModal from "../cart/CartModal";
import CartContext from "../context/CartContext";
import Search from "../ui/SearchBar";
import Link from "next/link";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (cartCount === 0) setHidden(true);
  }, [cartCount]);

  return (
    <nav className="sticky top-0 z-50 text-black bg-secondary">
      <div className="flex flex-wrap items-center justify-between w-full p-3 md:flex-nowrap md:p-6">
        <div className="flex items-center">
          <span className="w-1/2 md:w-full md:block">
            <Logo />
          </span>
        </div>
        <span className="hidden md:hidden">
          <Logo />
        </span>
        <div className="items-center justify-center hidden text-xs lg:flex lg:text-lg">
          <ul className="flex flex-row gap-3">
            <li className="pr-4 border-r border-black">
              <Link href="/">HOME</Link>
            </li>
            <li className="pr-4 border-r border-black">
              <Link href="/">SOBRE NOS</Link>
            </li>
            <li className="pr-4 border-r border-black">
              <Link href="/">PROMOÇOES</Link>
            </li>
            <li>
              <Link href="/">FALE CONOSCO</Link>
            </li>
          </ul>
        </div>
        <div className="items-center justify-center hidden md:flex">
          <Search />
        </div>
        <div className="flex items-center justify-center md:order-2">
          <button
            onClick={() => {
              setHidden(!hidden);
            }}
            className={`relative w-[100%] h-[100%] bg-tertiary md:p-1 bg-opacity-75 md:shadow-md rounded-full hover:bg-quaternary hover:bg-opacity-75`}
          >
            <span className="flex p-1 scale-150 md:p-2 md:scale-150">
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current"
              >
                <path
                  d="M8 11.01V11M16 11.01V11M8 8V7C8 5.93913 8.42143 4.92172 9.17157 
                                        4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143
                                         14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8M8 8H6.84027C5.80009
                                          8 4.93356 8.79732 4.84718 9.83391L4.18051 17.8339C4.08334 18.9999
                                           5.00352 20 6.1736 20H17.8264C18.9965 20 19.9167 18.9999 19.8195 
                                           17.8339L19.1528 9.83391C19.0664 8.79732 18.1999 8 17.1597 8H16M8 8H16"
                  stroke="#000000"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={`flex items-center justify-center p-1.5 w-[25%] h-[25%] text-xs absolute top-0 -right-0.5 md:top-0.5 md:-right-0 bg-orange-500 bg-opacity-85 text-white rounded-full`}
              >
                {cartCount}
              </span>
            </span>
          </button>
          <span
            className={`${hidden ? "hidden" : "block absolute z-20 top-12 right-4 mt:4 md:mt-10 md:top-20 md:right-7"}`}
          >
            <CartModal />
          </span>
        </div>
      </div>
      <Script src="/flowbite.min.js"></Script>
    </nav>
  );
};
export default Navbar;
