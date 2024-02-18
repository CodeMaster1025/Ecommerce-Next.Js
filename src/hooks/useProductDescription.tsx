import { useCallback, useEffect, useState } from "react";
import useProducts from "./useProductsCards";

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    quantityInStock: number;
    categoryEnums: string;
    photoLink: string;
    offPrice: number;
    stars: number;
};


export default function useProductsDescription(id :number) {
    const [productsDescription, setProductsDescription] = useState<Product[]>([]);
    const {displayedProducts} = useProducts();
    

    useEffect(() => {
        const fetchData = async () => {
              const filteredProducts = displayedProducts.filter((product) => product.id === id);
          setProductsDescription(filteredProducts);
        };
    
        fetchData();
      }, [id]); 

    return (
        {productsDescription, setProductsDescription}
    )
}
