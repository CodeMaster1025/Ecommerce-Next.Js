import { useEffect } from "react";
import useCart from "@/hooks/useCart";
import useProductCartQuantities from "@/hooks/useProductCartQuantities";

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
interface Props {
  products: Product[];
  totalPriceFunction: (total: number) => void;
}

const PricePerProduct = ({ products, totalPriceFunction }: Props) => {
  const { quantities, handleDecreaseQuantity, handleIncreaseQuantity } = useProductCartQuantities(products, totalPriceFunction);
  const { removeProductById, cart } = useCart();

  useEffect(() => {
    const total = cart.reduce((acc, product) => acc + (quantities[product.id] || 1) * product.price, 0);
    totalPriceFunction(total);
  }, [cart, quantities, totalPriceFunction]);

  if (!Array.isArray(cart)) {
    return null;
  }

  return (
    <tbody>
      {cart.map((product: Product) => {
        const { id, name, price, photoLink } = product;
        const quantity = quantities[id] || 1;
        const totalPrice = (quantity * price).toFixed(2);

        return (
          <tr className="text-xs md:text-base" key={id}>
            <td className="py-2">
              <div className="flex items-center">
                <img className="w-6 md:w-16 mr-4" src={photoLink} alt={name} />
                <span>{name}</span>
              </div>
            </td>
            <td className="py-2">${price}</td>
            <td className="py-2">
              <div className="flex text-center align-baseline">
                <button
                  onClick={() => handleDecreaseQuantity(id)}
                  className="border border-black border-opacity-10 hover:scale-105 rounded-md p-0.5 md:p-1"
                >
                  -
                </button>
                <span className="text-center text-sm md:text-lg w-6 p-0">{quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(id)}
                  className="border border-black border-opacity-10 hover:scale-105 rounded-md p-0.5 md:p-1"
                >
                  +
                </button>
                <button
                  onClick={() => removeProductById(id)}
                  className="opacity-50 text-center transition hover:text-red-800 hover:scale-105 rounded-md p-1 md:p-1"
                >
                  <span className="sr-only">Remove item</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.0"
                    stroke="currentColor"
                    className="h-3 w-3 md:w-6 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 
                      1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 
                      2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12
                       .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964
                        51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>

                </button>
              </div>
            </td>
            <td className="">${totalPrice}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
export default PricePerProduct;