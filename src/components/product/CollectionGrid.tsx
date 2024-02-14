export default function CollectionGrid() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <span className="flex items-center">
                        <span className="h-px flex-1 bg-black"></span>
                        <span id="new-collection" className="shrink-0 px-6 text-black text-xl md:text-4xl">Novidades</span>
                        <span className="h-px flex-1 bg-black"></span>
                    </span>
                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                    </p>
                </header>

                <ul className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <li>
                        <a href="#" className="group relative block">
                            <img
                                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white"></h3>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="group relative block">
                            <img
                                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white"></h3>
                            </div>
                        </a>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="group relative block">
                            <img
                                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white"></h3>
                            </div>
                        </a>
                    </li>
                </ul>
                <span className="flex items-center mt-12">
                        <span className="h-px flex-1 bg-black"></span>
                        <span id="new-collection" className="shrink-0 px-6 text-black text-xl md:text-4xl">Coleções</span>
                        <span className="h-px flex-1 bg-black"></span>
                    </span>
            </div>
        </section>
    )
} 