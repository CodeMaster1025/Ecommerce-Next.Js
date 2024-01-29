
import Link from "next/link";
import { useRouter } from "next/router";


export default function Categories() {
    const router = useRouter();


    return (
        <div className="fixed z-50 shadow-md bg-orange-200 text-black items-center justify-between w-full md:flex md:justify-center md:items-center md:mt-0" id="navbar-search">
        <ul
            className="flex flex-row overflow-auto text-xs font-extralight md:text-base p-2 md:p-0 mt-2 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-opacity-0">
            <li>
                <Link  href="?category=FITNESS" scroll={false}
                    className="block py-1 pl-3 pr-4 ">FITNESS</Link>
            </li>
            <li>
                <Link href="/?category=SAPATOS" scroll={false}
                    className="block py-1 pl-3 pr-4 ">SAPATOS</Link>
            </li>
            <li>
                <Link href="/?category=ACESSORIOS" scroll={false}
                    className="block py-1 pl-3 pr-4 ">ACESSORIOS</Link>
            </li>
            <li>
                <Link href="/?category=CALCAS" scroll={false}
                    className="block py-1 pl-3 pr-4 ">CALÇAS</Link>
            </li>
            <li>
                <Link href="/?category=CASACOS" scroll={false}
                    className="block py-1 pl-3 pr-4 ">CASACOS</Link>
            </li>
            <li>
                <Link href="/?category=BLUSAS" scroll={false}
                    className="block py-1 pl-3 pr-4 ">BLUSAS</Link>
            </li>
            <li> 
                <Link href="/?category=SAIAS" scroll={false}
                    className="block py-1 pl-3 pr-4 ">SAIAS</Link>
            </li>
            <li>
                <Link href="/?category=VESTIDOS" scroll={false}
                    className="block py-1 pl-3 pr-4 ">VESTIDOS</Link>
            </li>
        </ul>
    </div>
    )
}