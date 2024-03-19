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

const useCart = () => {
    const [cart, setCart] = useState<Product[]>([]);
    const [cartUpdateFlag, setCartUpdateFlag] = useState<number>(0);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(savedCart);
        setCartUpdateFlag(0);
    }, [cartUpdateFlag]);

    const addToCart = (product: Product): void => {
        setCart((prevCart) => {
            const isProductInCart = prevCart.some((cartItem) => cartItem.id === product.id);
            if (!isProductInCart) {
                const newCart = [...prevCart, product];
                localStorage.setItem('cart', JSON.stringify(newCart));
                update();
                setCartUpdateFlag(1);
                return newCart;
            }
            return prevCart;
        });
    };

    const removeProductById = (productId: number): void => {
        setCart((prevCart) => {
            const newCart = prevCart.filter((cartItem) => cartItem.id !== productId);
            localStorage.setItem('cart', JSON.stringify(newCart));
            update();
            setCartUpdateFlag(1);
            return newCart;
        });
    };

    return (
        { cart, cartUpdateFlag, addToCart, setCart, removeProductById }
    )
}
export default useCart;