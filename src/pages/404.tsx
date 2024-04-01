import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="grid h-screen px-4 place-content-center">
      <div className="text-center scale-125">
        <h1 className="font-black text-gray-300 text-9xl">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-500">Pagina não encontrada.</p>
        <Link
          href="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-gray-800 bg-orange-400 bg-opacity-75 rounded hover:bg-orange-500 focus:outline-none focus:ring"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};
export default Custom404;
