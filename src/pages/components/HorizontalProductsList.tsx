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
    { name: 'Vestido', category: 'Vestidos', price: 89.99, image: 'https://source.unsplash.com/featured/150x150?dress', ratingsCount: 4, offPrice: 20 },
    { name: 'Saia', category: 'Saias', price: 59.99, image: 'https://source.unsplash.com/featured/150x150?skirt', ratingsCount: 5, offPrice: 15 },
    { name: 'Blusa', category: 'Blusas', price: 39.99, image: 'https://source.unsplash.com/featured/150x150?blouse', ratingsCount: 3, offPrice: 10 },
    { name: 'Salto Alto', category: 'Calçados', price: 99.99, image: 'https://source.unsplash.com/featured/150x150?high-heels', ratingsCount: 4, offPrice: 15 },
    { name: 'Casaco de Inverno', category: 'Casacos', price: 149.99, image: 'https://source.unsplash.com/featured/150x150?coat', ratingsCount: 5, offPrice: 20 },
    { name: 'Lenço', category: 'Lenços', price: 19.99, image: 'https://source.unsplash.com/featured/150x150?scarf', ratingsCount: 3, offPrice: 10 }
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mt-12 cursor-pointer rounded-2xl">
      <div className="hidden sm:flex justify-center gap-8 overflow-x-scroll pb-4 hide-scroll-bar">
        {productsList.map((product, index) => (
          <div key={index} className="" onClick={() => handleCategoryClick(product.category)}>
            <div className={`border-2 border-yellow-800 border-opacity-0 bg-yellow-100 bg-opacity-5 overflow-hidden rounded-2xl shadow-sm hover:scale-105   transition-shadow duration-300 ease-in-out ${selectedCategory === product.category ? 'border-2 border-yellow-800 border-opacity-20' : ''}`}>
              <img className="" src={product.image} alt={product.name}></img>
              <p className="text-gray-800 text-center mt-2 text-md uppercase font-bold">{product.name}</p>
              <p className="text-gray-800 text-center text-xs">R${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


