import { useContext, useState } from "react";
import Link from "next/link";
import CartContext from "../context/CartContext";

const CartModal = () => {
  const { cart, price, removeAllProducts } = useContext(CartContext);

  return (
    <div className="w-full p-6 rounded-md shadow-xl bg-primary md:w-80 md:p-10">
      <ul className="space-y-2">
        {cart.map((product: any) => (
          <li
            key={product.id}
            className="flex items-center space-x-2 space-y-2 md:space-x-4"
          >
            <img
              className="object-cover w-10 h-12 rounded-md md:w-20 md:h-20"
              src={product.photoLink}
              alt="Imagem do produto"
            />
            <div>
              <h5 className="text-xs font-semibold md:text-sm">
                {product.name}
              </h5>
              <h6 className="text-xs text-black md:text-sm">
                {(
                  product.price -
                  (product.price * product.offPrice) / 100
                ).toFixed(2)}{" "}
                <del className="text-gray-500">{product.price}</del>
              </h6>
            </div>
          </li>
        ))}
      </ul>
      <h4 className="mt-4 text-sm md:text-lg">
        Total:{" "}
        <strong>
          <br></br>R$ {price}
        </strong>
      </h4>
      <div className="flex flex-col items-center justify-center gap-1 mt-4 md:flex-row md:mt-6 md:gap-4">
        <button
          onClick={removeAllProducts}
          className="items-center justify-center text-xs text-orange-400 md:text-sm focus:outline-none"
        >
          Esvaziar
        </button>
        <Link href={"/cart"}>
          <button className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 bg-quaternary text-white rounded-md hover:bg-orange-400 focus:outline-none">
            Ver Carrinho
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartModal;
