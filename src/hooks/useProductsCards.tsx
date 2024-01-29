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

const products2 = [
    {
        "id": 1,
        "name": "Vestido Floral",
        "description": "Descrição do vestido floral",
        "price": 89.99,
        "quantityInStock": 100,
        "categoryEnums": "VESTIDOS",
        "photoLink": "https://source.unsplash.com/featured/250x200?dress",
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
        "photoLink": "https://source.unsplash.com/featured/250x200?skirt",
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
        "photoLink": "https://source.unsplash.com/featured/250x200?fitness",
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
        "photoLink": "https://source.unsplash.com/featured/250x200?sapato",
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
        "photoLink": "https://source.unsplash.com/featured/250x200?blusa",
        "stars": 3,
        "offPrice": 10
    },
    {
        "id": 6,
        "name": "Bolsa de Couro",
        "description": "Descrição da bolsa de couro",
        "price": 129.99,
        "quantityInStock": 20,
        "categoryEnums": "ACESSORIOS",
        "photoLink": "https://source.unsplash.com/featured/250x200?handbag",
        "stars": 4,
        "offPrice": 20
    },
    {
        "id": 7,
        "name": "Jeans Skinny",
        "description": "Descrição do jeans skinny",
        "price": 69.99,
        "quantityInStock": 40,
        "categoryEnums": "CALCAS",
        "photoLink": "https://source.unsplash.com/featured/250x200?jeans",
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
        "photoLink": "https://source.unsplash.com/featured/250x200?coat",
        "stars": 4,
        "offPrice": 20
    }
]

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);


    const fetchProductData = useCallback (async () => {
        try {
            // const response = await fetch('http://localhost:8093/products/getAllProductsWithId');

            // if (!response.ok) {
            //     throw new Error(`HTTP error! Status: ${response.status}`);
            // }
            // const data = await response.json();
            // console.log(data)
            // setProducts(data);
            setProducts(products2)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [])


    useEffect(() => {
        fetchProductData();
    }, [fetchProductData]);

    return (
        {products}
    )
}
