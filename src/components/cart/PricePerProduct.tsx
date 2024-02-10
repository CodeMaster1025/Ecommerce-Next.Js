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
  totalPriceFunction: any;
}

export default function PricePerProduct({ products, totalPriceFunction }: Props) {
  
  const processedProductIds = new Set<number>();
  const {quantities, handleDecreaseQuantity, handleIncreaseQuantity} = useProductCartQuantities(products, totalPriceFunction)

  if (!Array.isArray(products)) {
    return null;
  }

  return (
    <tbody>
      {products.map((product: Product) => {
        if (processedProductIds.has(product.id)) {
          return null;
        }

        processedProductIds.add(product.id);

        return (
          <tr className="text-xs md:text-base" key={product.id}>
            <td className="py-2">
              <div className="flex items-center">
                <img
                  className="hidden md:block md:w-16 mr-4"
                  src={product.photoLink}
                  alt={product.name}
                />
                <span className="">{product.name}</span>
              </div>
            </td>
            <td className="py-2">${product.price}</td>
            <td className="py-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecreaseQuantity(product.id)}
                  className="border border-black border-opacity-15 hover:scale-115 rounded-md py-1 px-2"
                >
                  -
                </button>
                <span className="text-center w-8">{quantities[product.id] || 1}</span>
                <button
                  onClick={() => handleIncreaseQuantity(product.id)}
                  className="border border-black border-opacity-15 hover:scale-105 rounded-md py-1 px-2"
                >
                  +
                </button>
              </div>
            </td>
            <td className="py-2">${((quantities[product.id] || 1) * product.price).toFixed(2)}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
