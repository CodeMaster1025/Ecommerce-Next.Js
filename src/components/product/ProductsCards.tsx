import React, { createContext, useContext, useEffect, useState } from 'react';
import useProducts from '@/hooks/useProducts';
import useCart from '@/hooks/useCart';

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


export default function ProductsCards(): JSX.Element {
    const { products } = useProducts();
    const { addToCart } = useCart();

    function createProductTags(products: Product): JSX.Element {
        const { name, price, photoLink, offPrice, stars } = products;
        const discountedPrice = (price - (price * offPrice) / 100).toFixed(2);

        return (
            <div id='products-cards' key={name} className="relative flex flex-col items-center justify-center p-6 text-center hover:scale-105">
                <img src={photoLink} className="p-1 rounded-lg" alt={name} />
                <button
                    onClick={() => { addToCart(products) }}
                    className="absolute bottom-4 right-4 mb-2 bg-yellow-400 bg-opacity-50 text-black px-2 py-1 md:px-2 md:py-2 rounded-full hover:bg-yellow-100 focus:bg-yellow-400"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
                <h1 className="font-bold mt-2">{name}</h1>
                <p className="text-xs text-gray-500 line-through">R${price}</p>
                <p className="text-md">R${discountedPrice}</p>
                <div className='flex justify-center items-center gap-1 mt-1'>
                    <div className="text-3xl text-yellow-400">
                        {Array(Math.min(5, Math.max(1, Math.floor(stars)))).fill('★').join('')}
                    </div>
                    <span className="text-xs"> ({Math.floor(stars)})</span>
                </div>
            </div>
        );
    }
    return (
        <div>
            <span className='flex justify-center  items-center text-center'>
                <h1 id='product-title' className='mt-6 mb-6 md:text-3xl text-2xl'>NOSSOS PRODUTOS</h1>
            </span>
            <div className="py-4 mx-auto mt-6 mb-6 flex flex-col items-center justify-center text-gray-200">
                <div id="products-list" className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {products.map((product: Product) => (
                        <div key={product.name}>{createProductTags(product)}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
