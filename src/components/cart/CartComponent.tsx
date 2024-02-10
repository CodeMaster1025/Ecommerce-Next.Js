import { useEffect, useState } from "react";
import PricePerProduct from "./PricePerProduct";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantityInStock: number;
  categoryEnums: string;
  photoLink: string;
  offPrice: number;
  stars: number;
};

export default function CartComponent() {
  const [products, setProducts] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(1);
  const [cart, setCart] = useState<Product[]>([]);


  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
    }
  }, []);

  useEffect(() => {
    setProducts(cart);
  }, [cart]);


  return (
    <div className="bg-opacity-10 h-full mb-16 py-8 text-black">
      <div className="container mx-auto px-4">
        <h1 id="carrinho" className="text-2xl font-semibold mb-4"></h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-gray-300 bg-opacity-10 rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr className="text-xs md:text-lg">
                    <th className="text-left font-semibold">Produto</th>
                    <th className="text-left font-semibold">Preço</th>
                    <th className="text-left font-semibold">Quantidade</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <PricePerProduct totalPriceFunction={setTotal} products={products} />
              </table>
            </div>
          </div>
          <div className="md:w-1/4 ">
            <div className="bg-gray-400 bg-opacity-5 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Resumo</h2>
              <div className="flex justify-between mb-2">
                <span>Frete</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2 border-black"></hr>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                {(total).toFixed(2)}
              </div>
              <button className="bg-yellow-500 bg-opacity-50 text-black py-2 px-4 rounded-lg mt-4 w-full">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
