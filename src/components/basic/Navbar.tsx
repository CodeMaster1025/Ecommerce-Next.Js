import Script from "next/script";
import Logo from "../ui/Logo";
import { useEffect, useState } from "react";
import Link from "next/link";

export const update = () => {
    const cartId = document.getElementById("cart");
    const storedCart = localStorage.getItem("cart");

    if (cartId && storedCart) {
        const cartItems = JSON.parse(storedCart);
        const cartCount = cartItems.length;
        const coloredCartCount = `${cartCount}`;
        cartCount > 0 ? cartId.innerHTML = `${coloredCartCount}` : cartId.innerHTML = ``
        if(cartCount > 0) {
            cartId.classList.remove('hidden');
            cartId.classList.add('flex');
        } else {
            cartId.classList.add('hidden');
            cartId.classList.remove('flex');
        }
    }

};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        update();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    return (
        <nav id="nav-bar" className="sticky top-0 z-50 bg-orange-100 text-black">
            <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between p-3 md:p-6">
                <a href="#" className="flex items-center">
                    <span className="md:w-full w-1/2 md:hidden">
                        <Logo />
                    </span>
                </a>
                <div className="flex items-center justify-center md:order-2">
                    <Link href="/cart" className="">
                        <button className="relative w-[100%] h-[100%] bg-orange-300 md:p-1 bg-opacity-25 md:shadow-lg rounded-full hover:bg-orange-400 hover:bg-opacity-75">
                            <span className="flex p-1 md:p-2 scale-150 md:scale-150">
                                <svg
                                    width="18px"
                                    height="18px"
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
                                <span id="cart" className={`hidden items-center justify-center p-1.5 w-[25%] h-[25%] text-xs absolute top-0 -right-0.5 md:top-0.5 md:-right-0 bg-orange-500 bg-opacity-85 text-white rounded-full`}>
                                </span>
                            </span>
                        </button>
                    </Link>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-yellow-800 text-opacity-50 hidden md:hidden"
                        aria-controls="navbar-search"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.0"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center w-full md:flex md:justify-center md:items-center md:mt-0 ${isMenuOpen ? "block" : "hidden"
                        }`}
                    id="navbar-search"
                >
                    <Logo />

                    {/* <ul
                        className="flex flex-col p-2 md:p-0 mt-2 font-medium border border-yellow-700
                         border-opacity-20 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li className="">
                            <a href="#" className="block py-1 pl-3 pr-4" aria-current="page">
                                CATEGORIAS
                            </a>
                        </li>
                        <li className="">
                            <a href="#" className="block py-1 pl-3 pr-4" aria-current="page">
                                MARCAS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-1 pl-3 pr-4 ">
                                NOVIDADES
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-1 pl-3 pr-4">
                                CONTATO
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>
            <Script src="/flowbite.min.js"></Script>
        </nav>
    );
}
export default Navbar;