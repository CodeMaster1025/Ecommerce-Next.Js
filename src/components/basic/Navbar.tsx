import Script from "next/script";
import Logo from "./Logo";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";

export const update = () => {
    const carrinho = document.getElementById('cart');
    const storedCart = localStorage.getItem('cart');

    if (carrinho && storedCart) {
        const cartItems = JSON.parse(storedCart);
        const cartCount = cartItems.length;
        const coloredCartCount = `<span className="text-red-500">${cartCount}</span>`;

        cartCount > 0 ? carrinho.innerHTML = `CARRINHO(${coloredCartCount})` : carrinho.innerHTML = `CARRINHO`
    }
};

export default function Navbar(): JSX.Element {

    useEffect(() => {
        update()
    }, []);

    return (
        <nav onLoad={() => update()} id="nav-bar" className="sticky top-0 z-50 shadow-sm bg-orange-100">
            <div className="w-full flex flex-wrap items-center justify-around gap-1 p-3 md:p-9">
                <a href="#" className="flex items-center">
                    <span className="md:w-full w-1/2">
                        <Logo />
                    </span>
                </a>
                <div className="flex md:order-2">
                    <button data-collapse-toggle="navbar-search" type="button"
                        className="text-yellow-800 text-opacity-50 md:hidden"
                        aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:justify-center md:items-center md:mt-8" id="navbar-search">
                    <ul
                        className="flex flex-col p-2 md:p-0 mt-2 font-medium border border-yellow-700 border-opacity-20 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-opacity-0">
                        <li className="">
                            <a href="#"
                                className="block py-1 pl-3 pr-4"
                                aria-current="page">CATEGORIAS</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-1 pl-3 pr-4">CONTATO</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-1 pl-3 pr-4 ">PARCEIROS</a>
                        </li>
                        <li>
                            <Link id="cart" href="/carrinho"
                                className="block py-1 pl-3 pr-4 ">CARRINHO</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></Script>
        </nav>
    )
}
