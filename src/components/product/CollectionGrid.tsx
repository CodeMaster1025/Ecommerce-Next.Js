export default function CollectionGrid() {
    return (
        <section className="hidden md:flex">
            <div className="mx-auto max-w-screen-xl mt-8 md:mt-16">
                <ul className="mt-8 grid grid-cols-5 gap-8 lg:grid-cols-4">
                    <li>
                        <a href="#" className="group relative block">
                            <img
                                src="https://source.unsplash.com/featured/300x300?dress"
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
                                src="https://source.unsplash.com/featured/300x300?t-shirt"
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
                                src="https://source.unsplash.com/featured/300x300?pants"
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
                                src="https://source.unsplash.com/featured/300x300?black-dress"
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
                                src="https://source.unsplash.com/featured/300x300?t-shirt-black"
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />
                            
                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white"></h3>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
} 