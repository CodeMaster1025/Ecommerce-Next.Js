import Link from "next/link";

const Categories = () => {
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
    <div
      className="fixed z-10 items-center justify-between w-full text-black bg-orange-200 shadow-md md:flex md:justify-center md:items-center md:mt-0"
      id="navbar-search"
    >
      <ul
        id="categories-id"
        className="flex flex-row p-2 mt-2 overflow-auto text-xs bg-opacity-0 rounded-lg font-extralight md:text-base md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0"
      >
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              href={`/?category=${category.name}`}
              scroll={false}
              className="block py-1 pl-3 pr-4"
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
