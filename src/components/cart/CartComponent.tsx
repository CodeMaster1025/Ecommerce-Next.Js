import { useEffect, useState } from "react";
import PricePerProduct from "./PricePerProduct";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/router";


const CartComponent = () => {
  const [total, setTotal] = useState<number>(1);
  const { setCart, cart } = useCart();
  const [message, setMessage] = useState<string>("Olá, tenho interesse nesses produtos:%0A");

  const productsString = cart.map((product) => {
    return `${product.name} - por: $${(product.price - (product.price * product.offPrice / 100)).toFixed(2)}%0A`;
  }).join('');

  const router = useRouter();

  const handleClick = () => {
    console.log(productsString)
    router.push(`https://api.whatsapp.com/send/?phone=5585996062620&text=${message + productsString}&type=phone_number&app_absent=0`);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
    }
  }, []);

  return (
    <div className="h-full mb-0 py-8 text-black">
      <div className="container mx-auto px-4">
        <h1 id="carrinho" className="text-2xl font-semibold mb-4">Carrinho</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-gray-300 bg-opacity-10 rounded-lg shadow-md p-4 mb-6">
              <table className="w-full">
                <thead>
                  <tr className="text-xs md:text-lg">
                    <th className="text-left font-semibold">Produto</th>
                    <th className="text-left font-semibold">Preço</th>
                    <th className="text-left font-semibold">Quantidade</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <PricePerProduct totalPriceFunction={setTotal} products={cart} />
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-gray-400 bg-opacity-5 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Resumo</h2>
              <div className="flex justify-between mb-2">
                <span>Frete</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2 border-black" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span>{total.toFixed(2)}</span>
              </div>
              <button onClick={() => {handleClick()}} className="bg-orange-300 hover:bg-orange-400 bg-opacity-75 text-black py-2 px-4 rounded-lg mt-4 w-full">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartComponent;
