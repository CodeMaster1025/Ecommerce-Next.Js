import { useEffect, useState } from "react";
import { update } from "../components/basic/Navbar";

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

export default function useCart() {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product): void => {
        const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);
        
        if (!isProductInCart) {
            setCart((prevCart) => [...prevCart, product]);
        }

            localStorage.setItem('cart', JSON.stringify(cart));
            update()
    };
    
    return (
        {cart, addToCart}
    )
}