import { useContext } from "react";
import CartContext from "@/hooks/useCart";
import Link from "next/link";

const CartModal = () => {
    const { cart, price, removeAllProducts } = useContext(CartContext);

    return (
        <div className="bg-orange-50 w-full md:w-80 rounded-md p-6 md:p-10 shadow-xl">
            <ul className="space-y-2">
                {cart.map((product: any) => (
                    <li key={product.id} className="flex items-center space-x-2 md:space-x-4">
                        <img className="w-12 h-12 md:w-20 md:h-20" src={product.photoLink} alt="Imagem do produto" />
                        <div>
                            <h5 className="text-xs md:text-sm font-semibold">{product.name}</h5>
                            <h6 className="text-xs md:text-sm text-black">{product.price} <del className="text-gray-500">{product.price}</del></h6>
                        </div>
                    </li>
                ))}
            </ul>
            <h4 className="text-sm md:text-lg font-semibold mt-4">Total: <strong><br></br>R$ {price}</strong></h4>
            <div className="flex flex-col md:flex-row justify-center items-center mt-4 md:mt-6 gap-1 md:gap-4">
                <button onClick={removeAllProducts} className="text-xs justify-center items-center md:text-sm text-orange-400 focus:outline-none">Esvaziar</button>
                <Link href={"/cart"}>
                    <button className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 focus:outline-none transition duration-300 ease-in-out">Ver Carrinho</button>
                </Link>
            </div>
        </div>
    );
};

export default CartModal;
