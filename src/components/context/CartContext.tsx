import { createContext, useEffect, useState } from "react";
import { Product } from "@/components/type/Product";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeProductById: (productId: number) => void;
  setCart: (cart: Product[]) => void;
  cartCount: number;
  setCartCount: (count: number) => void;
  cartUpdateFlag: number;
  setCartUpdateFlag: (flag: number) => void;
  removeAllProducts: () => void;
  price: string;
}

const CartContext = createContext({} as CartContextType);
export default CartContext;

export function CartProvider(props: any) {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartUpdateFlag, setCartUpdateFlag] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(cart.length);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
    setCartCount(savedCart.length);
    setCartUpdateFlag(0);
  }, [cartUpdateFlag]);

  const addToCart = (product: Product): void => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some(
        (cartItem) => cartItem.id === product.id,
      );
      if (!isProductInCart) {
        const newCart = [...prevCart, product];
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCartUpdateFlag(1);
        return newCart;
      }
      return prevCart;
    });
  };

  const price = cart
    .reduce(
      (acc, product) =>
        acc + (product.price - (product.price * product.offPrice) / 100),
      0,
    )
    .toFixed(2);

  const removeAllProducts = (): void => {
    setCart([]);
    localStorage.removeItem("cart");
    setCartCount(0);
    setCartUpdateFlag(1);
  };

  const removeProductById = (productId: number): void => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((cartItem) => cartItem.id !== productId);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCartUpdateFlag(1);
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
        price,
        removeProductById,
        removeAllProducts,
        cartUpdateFlag,
        setCartUpdateFlag,
        cartCount,
        setCartCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
