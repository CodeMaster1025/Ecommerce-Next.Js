import Link from "next/link";

export default function Categories() {
    const categories = [
        { name: "FITNESS", label: "FITNESS" },
        { name: "SAPATOS", label: "SAPATOS" },
        { name: "ACESSORIOS", label: "ACESSORIOS" },
        { name: "CALCAS", label: "CALÇAS" },
        { name: "CASACOS", label: "CASACOS" },
        { name: "BLUSAS", label: "BLUSAS" },
        { name: "SAIAS", label: "SAIAS" },
        { name: "VESTIDOS", label: "VESTIDOS" },
    ];

    return (
        <div className="fixed z-50 shadow-md bg-orange-200 text-black items-center justify-between w-full md:flex md:justify-center md:items-center md:mt-0" id="navbar-search">
            <ul id="categories-id" className="flex flex-row overflow-auto text-xs font-extralight md:text-base p-2 md:p-0 mt-2 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-opacity-0">
                {categories.map((category) => (
                    <li key={category.name}>
                        <Link href={`/?category=${category.name}`} scroll={false} className="block py-1 pl-3 pr-4">
                            {category.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
