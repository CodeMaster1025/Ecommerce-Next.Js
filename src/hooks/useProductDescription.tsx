import { useEffect, useState } from "react";
import useProducts from "./useProductsCards";
import { Product } from "@/components/type/Product";



const useProductsDescription = (id: number) => {
    const [productsDescription, setProductsDescription] = useState<Product[]>([]);
    const { displayedProducts } = useProducts();


    useEffect(() => {
        const fetchData = async () => {
            const filteredProducts = displayedProducts.filter((product) => product.id === id);
            setProductsDescription(filteredProducts);
        };

        fetchData();
    }, [id, displayedProducts]);

    return (
        { productsDescription, setProductsDescription }
    )
}
export default useProductsDescription;