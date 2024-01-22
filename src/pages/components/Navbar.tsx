import Script from "next/script";
import Logo from "./Logo";

export default function Navbar(): JSX.Element {
    return (
        <><nav id="nav-bar" className="bg-yellow-900 bg-opacity-20 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <span className="sm:w-full w-1/2">
                        <Logo />
                    </span>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
                        className="md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">O que procura?</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar"
                            className="block w-full px-2.5 py-2 pl-10 text-sm border-0 rounded-lg bg-gray-200 bg-opacity-40"
                            placeholder="O que procura?"></input>
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar"
                            className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-200"
                            placeholder="Search..."></input>
                    </div>
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-opacity-0">
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md: md:p-0"
                                aria-current="page">DESTAQUES</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 rounded  md:hover:bg-transparent md: md:p-0">CONTATO</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md: md:p-0">PARCEIROS</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md: md:p-0">CARRINHO</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></Script>
        </nav></>
    )
}