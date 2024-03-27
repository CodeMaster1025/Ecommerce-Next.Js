import useCart from "@/hooks/useCart";
import Link from "next/link";

const CartModal = () => {
    const { removeProductById, cart } = useCart();

    return (
        <div className="bg-orange-100 w-[310px] h-auto rounded-md p-10 shadow-lg">
            <h4 className="text-lg font-semibold mb-4">Meu carrinho</h4>
            <ul className="space-y-4">
                {cart.map((product) => (
                    <li key={product.id} className="flex items-center space-x-4">
                        <img className="w-16 h-16" src={product.photoLink} alt="Imagem do produto" />
                        <div>
                            <h5 className="text-base font-semibold">{product.name}</h5>
                            <h6 className="text-sm text-gray-600">{product.price} <del className="ml-2 text-red-500">{product.price}</del></h6>
                        </div>
                    </li>
                ))}

            </ul>
            <h4 className="text-lg font-semibold mt-4">Valor total: <strong>R$ 219,00</strong></h4>
            <div className="flex justify-between mt-6">
                <Link href={"/"}>
                    <button className="text-sm text-blue-500 hover:underline focus:outline-none">Esvaziar</button>
                </Link>
                <Link href={"/carrinho"}>
                    <button className="text-sm px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out">Ver Carrinho</button>
                </Link>
            </div>
        </div>
    );
};

export default CartModal;
