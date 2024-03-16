const Custom404 = () => {
    return (
        <div className="grid h-screen place-content-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-300">404</h1>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
                <p className="mt-4 text-gray-500">Pagina não encontrada.</p>
                <a
                    href="/"
                    className="mt-6 inline-block rounded bg-orange-400 bg-opacity-75 px-5 py-3 text-sm font-medium text-gray-800 hover:bg-orange-500 focus:outline-none focus:ring"
                >
                    Voltar para o início
                </a>
            </div>
        </div>
    )
}
export default Custom404;