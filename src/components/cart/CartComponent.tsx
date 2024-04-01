import { useContext, useEffect, useState } from "react";
import PricePerProduct from "./PricePerProduct";
import { useRouter } from "next/router";
import CartContext from "../context/CartContext";

const CartComponent = () => {
  const [total, setTotal] = useState<number>(1);
  const { cart, price } = useContext(CartContext);

  const [message, setMessage] = useState<string>(
    "Olá, tenho interesse nesses produtos:%0A",
  );

  const productsString = cart
    .map((product: any) => {
      return `${product.name} - por: $${(product.price - (product.price * product.offPrice) / 100).toFixed(2)}%0A`;
    })
    .join("");

  const router = useRouter();

  const handleClick = () => {
    router.push(
      `https://api.whatsapp.com/send/?phone=5585996062620&text=${message + productsString}&type=phone_number&app_absent=0`,
    );
  };

  return (
    <div className="h-full py-8 my-8 text-black md:my-16">
      <div className="container px-4 mx-auto">
        {/* <h1 id="carrinho" className="mb-4 text-2xl font-semibold">
          Carrinho
        </h1> */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="md:w-3/4">
            <div className="p-4 mb-6 bg-opacity-25 rounded-lg shadow-md bg-primary">
              <table className="w-full">
                <thead>
                  <tr className="text-xs md:text-lg">
                    <th className="font-semibold text-left">Produto</th>
                    <th className="font-semibold text-left">Preço</th>
                    <th className="font-semibold text-left">Quantidade</th>
                    <th className="font-semibold text-left">Total</th>
                  </tr>
                </thead>
                <PricePerProduct
                  totalPriceFunction={setTotal}
                  products={cart}
                />
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="p-6 bg-opacity-25 rounded-lg shadow-md bg-primary">
              <h2 className="mb-4 text-lg font-semibold">Resumo</h2>
              <div className="flex justify-between mb-2">
                <span>Frete</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2 border-black" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span>{total.toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
                  handleClick();
                }}
                className="w-full px-4 py-2 mt-4 text-black rounded-lg bg-tertiary hover:bg-quaternary"
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartComponent;
