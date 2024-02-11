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

export default function useQuantities(products :Product[], totalPriceFunction: any) {
    const [quantities, setQuantities] = useState<number[]>([1]);

    const handleDecreaseQuantity = (productId: number) => {
        setQuantities((prevQuantities) => {
          const updatedQuantity = Math.max((prevQuantities[productId] || 1) - 1, 0);
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

      return (
        {quantities, handleDecreaseQuantity, handleIncreaseQuantity, setQuantities}
      )

}