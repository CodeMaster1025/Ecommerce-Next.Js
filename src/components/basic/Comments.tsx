interface CommentProps {
    imgSrc: string;
    name: string;
    text: string;

}

const Comment = ({ imgSrc, name, text }: CommentProps) => {
    return (
        <blockquote className="rounded-lg  p-6 sm:p-8">
            <div className="flex items-center gap-4">
                <img
                    alt=""
                    src={imgSrc}
                    className="size-14 rounded-full object-cover"
                />
                <div>
                    <div className="flex justify-center gap-0.5 text-yellow-400">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                                     00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1
                                     0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0
                                      00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0
                                       00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        ))}
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
                </div>
            </div>
            <p className="mt-4 text-gray-700">{text}</p>
        </blockquote>
    );
};

const Comments = () => {
    return (
        <section className="bg-orange-100 bg-opacity-35">
            <div className="mx-auto max-w-screen-xl py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    <span className="flex items-center">
                        <span className="h-px flex-1 bg-black"></span>
                        <span id="new-collection" className="shrink-0 px-6 text-black text-xl md:text-4xl">Avaliações</span>
                        <span className="h-px flex-1 bg-black"></span>
                    </span>
                </h2>
                <div className="md:mt-2 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <Comment
                        imgSrc="https://source.unsplash.com/featured/250x200?man"
                        name="Leonardo"
                        text="Além disso, a durabilidade do material demonstra a preocupação com a longevidade do produto. Cada costura parece ser feita com precisão, assegurando resistência e resistindo ao teste do tempo. A praticidade também não foi esquecida, com detalhes funcionais que facilitam o uso diário."
                    />

                    <Comment
                        imgSrc="https://source.unsplash.com/featured/250x200?woman"
                        name="Leia"
                        text="A versatilidade deste item é notável, adaptando-se perfeitamente a diversas ocasiões. Seja para um evento formal ou para um dia casual, a elegância e o estilo são garantidos. A modelagem é cuidadosamente pensada, proporcionando um caimento impecável que realça a silhueta de forma natural."
                    />

                    <Comment
                        imgSrc="https://source.unsplash.com/featured/250x200?female"
                        name="Romeu"
                        text="A experiência com este produto de roupa é verdadeiramente excepcional. Desde o primeiro contato, é evidente o cuidado dedicado à sua fabricação. O tecido escolhido proporciona um toque suave e confortável, enquanto a atenção aos detalhes revela um compromisso inigualável com a qualidade."
                    />
                </div>
            </div>
        </section>
    );
};

export default Comments;
