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
    { name: 'Vestido', category: 'Vestidos', price: 89.99, image: 'https://source.unsplash.com/featured/200x200?dress', ratingsCount: 4, offPrice: 20 },
    { name: 'Saia', category: 'Saias', price: 59.99, image: 'https://source.unsplash.com/featured/200x200?skirt', ratingsCount: 5, offPrice: 15 },
    { name: 'Blusa', category: 'Blusas', price: 39.99, image: 'https://source.unsplash.com/featured/200x200?blouse', ratingsCount: 3, offPrice: 10 },
    { name: 'Salto Alto', category: 'Calçados', price: 99.99, image: 'https://source.unsplash.com/featured/200x200?high-heels', ratingsCount: 4, offPrice: 15 },
    { name: 'Casaco de Inverno', category: 'Casacos', price: 149.99, image: 'https://source.unsplash.com/featured/200x200?coat', ratingsCount: 5, offPrice: 20 },
    { name: 'Lenço', category: 'Lenços', price: 19.99, image: 'https://source.unsplash.com/featured/200x200?scarf', ratingsCount: 3, offPrice: 10 }
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="hidden sm:flex flex-col mt-12 m-auto p-auto cursor-pointer rounded-2xl">
      <div className="flex justify-center gap-4 p-8 overflow-x-scroll pb-10 hide-scroll-bar">
        {productsList.map((product, index) => (
          <div key={index} className="inline-block px-3" onClick={() => handleCategoryClick(product.category)}>
            <div className={`h-38 max-w-xs bg-yellow-100 bg-opacity-5 overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out ${selectedCategory === product.category ? 'border-4 border-gray-800 border-opacity-75' : ''}`}>
              <img className="" src={product.image} alt={product.name}></img>
              <p className="text-gray-800 text-center mt-2 text-sm font-semibold">{product.name}</p>
              <p className="text-gray-800 text-center mt-1 text-xs font-semibold">R${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


