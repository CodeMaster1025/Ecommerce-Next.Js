import { useEffect, useState } from "react";

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
  
  const [quantities, setQuantities] = useState<number[]>([1]);
  const processedProductIds = new Set<number>();

  const handleDecreaseQuantity = (productId: number) => {
    setQuantities((prevQuantities) => {
      const updatedQuantity = Math.max((prevQuantities[productId] || 1) - 1, 1);
      return { ...prevQuantities, [productId]: updatedQuantity };
    });
  };

  const handleIncreaseQuantity = (productId: number) => {
    setQuantities((prevQuantities) => {
      const updatedQuantity = Math.min((prevQuantities[productId] || 1) + 1, 10);
      return { ...prevQuantities, [productId]: updatedQuantity };
    });
  };


  useEffect(() => {
    let sum = 0;
    products.forEach((product) => {
      const quantity = quantities[product.id] || 1;
      sum += quantity * product.price;
    });
    totalPriceFunction(sum)
  }, [products, quantities]);



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
          <tr key={product.id}>
            <td className="py-4">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 mr-4"
                  src={product.photoLink}
                  alt={product.name}
                />
                <span className="font-semibold">{product.name}</span>
              </div>
            </td>
            <td className="py-4">${product.price}</td>
            <td className="py-4">
              <div className="flex items-center">
                <button
                  onClick={() => handleDecreaseQuantity(product.id)}
                  className="border border-black border-opacity-15 hover:scale-105 rounded-md py-2 px-4 mr-2"
                >
                  -
                </button>
                <span className="text-center w-8">{quantities[product.id] || 1}</span>
                <button
                  onClick={() => handleIncreaseQuantity(product.id)}
                  className="border border-black border-opacity-15 hover:scale-105 rounded-md py-2 px-4 ml-2"
                >
                  +
                </button>
              </div>
            </td>
            <td className="py-4">${((quantities[product.id] || 1) * product.price).toFixed(2)}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
