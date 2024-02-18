import { useCallback, useEffect, useState } from "react";

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

const productsList = [
    {
        "id": 1,
        "name": "Vestido Floral",
        "description": "Descrição do vestido floral",
        "price": 89.99,
        "quantityInStock": 100,
        "categoryEnums": "VESTIDOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?dress",
        "stars": 5,
        "offPrice": 20
    },
    {
        "id": 2,
        "name": "Saia Midi",
        "description": "Descrição da saia midi",
        "price": 59.99,
        "quantityInStock": 100,
        "categoryEnums": "SAIAS",
        "photoLink": "https://source.unsplash.com/featured/250x300?skirt",
        "stars": 100,
        "offPrice": 15
    },
    {
        "id": 3,
        "name": "Regata",
        "description": "Descrição da regata",
        "price": 59.99,
        "quantityInStock": 100,
        "categoryEnums": "FITNESS",
        "photoLink": "https://source.unsplash.com/featured/250x300?fitness",
        "stars": 5,
        "offPrice": 15
    },
    {
        "id": 4,
        "name": "Sapato",
        "description": "Descrição do sapato",
        "price": 59.99,
        "quantityInStock": 100,
        "categoryEnums": "SAPATOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?sapato",
        "stars": 10,
        "offPrice": 15
    },
    {
        "id": 5,
        "name": "Blusa Elegante",
        "description": "Descrição da blusa elegante",
        "price": 39.99,
        "quantityInStock": 80,
        "categoryEnums": "BLUSAS",
        "photoLink": "https://source.unsplash.com/featured/250x300?blusa",
        "stars": 3,
        "offPrice": 10
    },
    {
        "id": 6,
        "name": "Jeans Skinny",
        "description": "Descrição do jeans skinny",
        "price": 69.99,
        "quantityInStock": 40,
        "categoryEnums": "CALCAS",
        "photoLink": "https://source.unsplash.com/featured/250x300?jeans",
        "stars": 4,
        "offPrice": 10
    },
    {
        "id": 8,
        "name": "Casaco de Inverno",
        "description": "Descrição do casaco de inverno",
        "price": 149.99,
        "quantityInStock": 10,
        "categoryEnums": "CASACOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?coat",
        "stars": 4,
        "offPrice": 20
    },
    {
        "id": 10,
        "name": "Camiseta Listrada",
        "description": "Descrição da camiseta listrada",
        "price": 29.99,
        "quantityInStock": 60,
        "categoryEnums": "CAMISETAS",
        "photoLink": "https://source.unsplash.com/featured/250x300?striped-shirt",
        "stars": 3,
        "offPrice": 10
    },
    {
        "id": 11,
        "name": "Relógio Elegante",
        "description": "Descrição do relógio elegante",
        "price": 119.99,
        "quantityInStock": 30,
        "categoryEnums": "ACESSORIOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?watch",
        "stars": 5,
        "offPrice": 25
    },
    {
        "id": 12,
        "name": "Shorts Esportivo",
        "description": "Descrição do shorts esportivo",
        "price": 49.99,
        "quantityInStock": 70,
        "categoryEnums": "FITNESS",
        "photoLink": "https://source.unsplash.com/featured/250x300?sport-shorts",
        "stars": 4,
        "offPrice": 10
    },
    {
        "id": 13,
        "name": "Tênis Casual",
        "description": "Descrição do tênis casual",
        "price": 89.99,
        "quantityInStock": 50,
        "categoryEnums": "SAPATOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?sneakers",
        "stars": 4,
        "offPrice": 15
    },
    {
        "id": 14,
        "name": "Colar de Pérolas",
        "description": "Descrição do colar de pérolas",
        "price": 69.99,
        "quantityInStock": 25,
        "categoryEnums": "ACESSORIOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?pearl-necklace",
        "stars": 5,
        "offPrice": 20
    },
    {
        "id": 15,
        "name": "Boné Esportivo",
        "description": "Descrição do boné esportivo",
        "price": 34.99,
        "quantityInStock": 40,
        "categoryEnums": "ACESSORIOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?sport-cap",
        "stars": 3,
        "offPrice": 10
    },
    {
        "id": 16,
        "name": "Mala de Viagem",
        "description": "Descrição da mala de viagem",
        "price": 99.99,
        "quantityInStock": 20,
        "categoryEnums": "ACESSORIOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?travel-bag",
        "stars": 4,
        "offPrice": 15
    },
    {
        "id": 17,
        "name": "Vestido de Festa",
        "description": "Descrição do vestido de festa",
        "price": 129.99,
        "quantityInStock": 30,
        "categoryEnums": "VESTIDOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?party-dress",
        "stars": 5,
        "offPrice": 25
    },
    {
        "id": 18,
        "name": "Bermuda Cargo",
        "description": "Descrição da bermuda cargo",
        "price": 49.99,
        "quantityInStock": 60,
        "categoryEnums": "CALCAS",
        "photoLink": "https://source.unsplash.com/featured/250x300?cargo-shorts",
        "stars": 4,
        "offPrice": 10
    },
    {
        "id": 19,
        "name": "Camisa Social",
        "description": "Descrição da camisa social",
        "price": 79.99,
        "quantityInStock": 40,
        "categoryEnums": "CAMISAS",
        "photoLink": "https://source.unsplash.com/featured/250x300?dress-shirt",
        "stars": 4,
        "offPrice": 15
    },
    {
        "id": 20,
        "name": "Chapéu de Sol",
        "description": "Descrição do chapéu de sol",
        "price": 29.99,
        "quantityInStock": 80,
        "categoryEnums": "ACESSORIOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?sun-hat",
        "stars": 3,
        "offPrice": 10
    },
    {
        "id": 21,
        "name": "Jaqueta Jeans",
        "description": "Descrição da jaqueta jeans",
        "price": 89.99,
        "quantityInStock": 35,
        "categoryEnums": "CASACOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?denim-jacket",
        "stars": 4,
        "offPrice": 15
    },
    {
        "id": 22,
        "name": "Sapato Social",
        "description": "Descrição do sapato social",
        "price": 99.99,
        "quantityInStock": 25,
        "categoryEnums": "SAPATOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?dress-shoes",
        "stars": 5,
        "offPrice": 20
    },
    {
        "id": 23,
        "name": "Saia Longa",
        "description": "Descrição da saia longa",
        "price": 69.99,
        "quantityInStock": 45,
        "categoryEnums": "SAIAS",
        "photoLink": "https://source.unsplash.com/featured/250x300?long-skirt",
        "stars": 4,
        "offPrice": 10
    },
    {
        "id": 24,
        "name": "Pulseira de Prata",
        "description": "Descrição da pulseira de prata",
        "price": 39.99,
        "quantityInStock": 50,
        "categoryEnums": "ACESSORIOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?silver-bracelet",
        "stars": 4,
        "offPrice": 10
    },
    {
        "id": 25,
        "name": "Calça Legging",
        "description": "Descrição da calça legging",
        "price": 39.99,
        "quantityInStock": 70,
        "categoryEnums": "FITNESS",
        "photoLink": "https://source.unsplash.com/featured/250x300?leggings",
        "stars": 3,
        "offPrice": 10
    },
    {
        "id": 26,
        "name": "Moletom Casual",
        "description": "Descrição do moletom casual",
        "price": 79.99,
        "quantityInStock": 30,
        "categoryEnums": "CASACOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?casual-sweatshirt",
        "stars": 4,
        "offPrice": 15
    },
    {
        "id": 27,
        "name": "Chinelo Slide",
        "description": "Descrição do chinelo slide",
        "price": 24.99,
        "quantityInStock": 90,
        "categoryEnums": "SAPATOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?slide-sandals",
        "stars": 3,
        "offPrice": 10
    },
    {
        "id": 29,
        "name": "Boné Snapback",
        "description": "Descrição do boné snapback",
        "price": 29.99,
        "quantityInStock": 40,
        "categoryEnums": "ACESSORIOS",
        "photoLink": "https://source.unsplash.com/featured/250x300?snapback-hat",
        "stars": 4,
        "offPrice": 10
    },
    {
        "id": 30,
        "name": "Blusa de Tricô",
        "description": "Descrição da blusa de tricô",
        "price": 69.99,
        "quantityInStock": 25,
        "categoryEnums": "BLUSAS",
        "photoLink": "https://source.unsplash.com/featured/250x300?knit-sweater",
        "stars": 4,
        "offPrice": 15
    },
    {
        "id": 31,
        "name": "Calça Cargo",
        "description": "Descrição da calça cargo",
        "price": 59.99,
        "quantityInStock": 35,
        "categoryEnums": "CALCAS",
        "photoLink": "https://source.unsplash.com/featured/250x300?cargo-pants",
        "stars": 3,
        "offPrice": 10
    }
]

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>(productsList);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categoria, setCategoria] = useState("");
    const [productId, setProductsId] = useState<number>(1);


    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('http://localhost:8093/products', {
    //           method: 'GET',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //         });
    
    //         if (!response.ok) {
    //           throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    
    //         const data = await response.json();
    //         setProducts(data)
    //       } catch (error) {
    //         console.error('Error fetching products: ', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
    
  
    const onSetCategoryClick = useCallback(
      (categoryValue: string) => {
        setCategoria(categoryValue);
  
        if (categoryValue === "") {
          setFilteredProducts([]);
        } else {
          const filtered = productsList.filter(
            (product) => product.categoryEnums === categoryValue
          );
          setFilteredProducts(filtered);
        }

      },
      [setCategoria, setFilteredProducts]
    );

    const displayedProducts = categoria ? filteredProducts : products;
 
    return { displayedProducts, onSetCategoryClick,  categoria };
  }