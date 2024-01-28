import React, { useState } from 'react';

interface Product {
  name: string;
  category: string;
  price: number;
  image: string;
  ratingsCount: number;
  offPrice: number;
}

export default function ProductsHorizontalList(): JSX.Element  {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const productsList: Product[] = [
    { name: 'Vestido', category: 'Vestidos', price: 89.99, image: 'https://source.unsplash.com/featured/200x300?dress', ratingsCount: 4, offPrice: 20 },
    { name: 'Saia', category: 'Saias', price: 59.99, image: 'https://source.unsplash.com/featured/200x300?skirt', ratingsCount: 5, offPrice: 15 },
    { name: 'Blusa', category: 'Blusas', price: 39.99, image: 'https://source.unsplash.com/featured/200x300?blusa', ratingsCount: 3, offPrice: 10 },
    { name: 'Salto Alto', category: 'Calçados', price: 99.99, image: 'https://source.unsplash.com/featured/200x300?high-heels', ratingsCount: 4, offPrice: 15 },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
    <span className='flex  justify-center  items-center text-center'>
            <h1 id='product-title' className='hidden md:flex mt-12 text:2xl md:text-3xl'>NOVIDADES</h1>
    </span>
    <div className="mt-12 cursor-pointer rounded-2xl">
      <div className="flex justify-center gap-6 overflow overflow-x-scroll pb-4 hide-scroll-bar text-center">
        {productsList.map((product, index) => (
          <div key={index} className="" onClick={() => handleCategoryClick(product.category)}>
            <div className={`border-2 border-yellow-800 border-opacity-10 bg-yellow-900 bg-opacity-5 overflow-hidden rounded-2xl shadow-sm hover:scale-105   transition-shadow duration-300 ease-in-out ${selectedCategory === product.category ? 'border-2 border-yellow-800 border-opacity-20' : ''}`}>
              <img className="" src={product.image} alt={product.name}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};


