import { useCallback, useState } from "react";

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
    id: 1,
    name: "Vestido Floral",
    description:
      "Vestido floral elegante, perfeito para diversas ocasiões. Confeccionado com tecido leve e confortável, proporcionando charme e estilo. Aproveite a promoção com desconto de R$20!",
    price: 89.99,
    quantityInStock: 100,
    categoryEnums: "VESTIDOS",
    photoLink: "https://source.unsplash.com/featured/250x300?dress",
    stars: 5,
    offPrice: 20,
  },
  {
    id: 2,
    name: "Saia Midi",
    description:
      "Saia midi moderna e versátil, ideal para compor looks femininos. Feita com tecido de alta qualidade para garantir conforto e estilo. Aproveite o desconto de R$15!",
    price: 59.99,
    quantityInStock: 100,
    categoryEnums: "SAIAS",
    photoLink: "https://source.unsplash.com/featured/250x300?skirt",
    stars: 100,
    offPrice: 15,
  },
  {
    id: 3,
    name: "Regata",
    description:
      "Regata fitness confortável, ideal para atividades físicas. Com design moderno e tecido respirável, proporciona liberdade de movimento. Aproveite o desconto de R$15!",
    price: 59.99,
    quantityInStock: 100,
    categoryEnums: "FITNESS",
    photoLink: "https://source.unsplash.com/featured/250x300?fitness",
    stars: 5,
    offPrice: 15,
  },
  {
    id: 4,
    name: "Sapato",
    description:
      "Sapato elegante para diversas ocasiões. Confortável e estiloso, é a escolha perfeita para um look sofisticado. Aproveite o desconto de R$15!",
    price: 59.99,
    quantityInStock: 100,
    categoryEnums: "SAPATOS",
    photoLink: "https://source.unsplash.com/featured/250x300?sapato",
    stars: 10,
    offPrice: 15,
  },
  {
    id: 5,
    name: "Blusa Elegante",
    description:
      "Blusa elegante para diversas ocasiões. Com um design moderno e sofisticado, é a peça ideal para um visual refinado. Aproveite o desconto de R$10!",
    price: 39.99,
    quantityInStock: 80,
    categoryEnums: "BLUSAS",
    photoLink: "https://source.unsplash.com/featured/250x300?blusa",
    stars: 3,
    offPrice: 10,
  },
  {
    id: 6,
    name: "Jeans Skinny",
    description:
      "Calça jeans skinny para um look moderno e estiloso. Confeccionada com tecido de alta qualidade, proporciona conforto e durabilidade. Aproveite o desconto de R$10!",
    price: 69.99,
    quantityInStock: 40,
    categoryEnums: "CALCAS",
    photoLink: "https://source.unsplash.com/featured/250x300?jeans",
    stars: 4,
    offPrice: 10,
  },
  {
    id: 8,
    name: "Casaco de Inverno",
    description:
      "Casaco de inverno elegante e quente. Perfeito para os dias mais frios, com um design moderno que complementa qualquer visual. Aproveite o desconto de R$20!",
    price: 149.99,
    quantityInStock: 10,
    categoryEnums: "CASACOS",
    photoLink: "https://source.unsplash.com/featured/250x300?coat",
    stars: 4,
    offPrice: 20,
  },
  {
    id: 10,
    name: "Camiseta Listrada",
    description:
      "Camiseta listrada casual e confortável. Com um design moderno e descontraído, é a opção perfeita para o dia a dia. Aproveite o desconto de R$10!",
    price: 29.99,
    quantityInStock: 60,
    categoryEnums: "CAMISETAS",
    photoLink: "https://source.unsplash.com/featured/250x300?striped-shirt",
    stars: 3,
    offPrice: 10,
  },
  {
    id: 11,
    name: "Relógio Elegante",
    description:
      "Relógio elegante para complementar seu estilo. Design sofisticado e funcionalidades modernas. Aproveite o desconto de R$25!",
    price: 119.99,
    quantityInStock: 30,
    categoryEnums: "ACESSORIOS",
    photoLink: "https://source.unsplash.com/featured/250x300?watch",
    stars: 5,
    offPrice: 25,
  },
  {
    id: 12,
    name: "Shorts Esportivo",
    description:
      "Shorts esportivo confortável e estiloso. Ideal para práticas esportivas ou looks descontraídos. Aproveite o desconto de R$10!",
    price: 49.99,
    quantityInStock: 70,
    categoryEnums: "FITNESS",
    photoLink: "https://source.unsplash.com/featured/250x300?sport-shorts",
    stars: 4,
    offPrice: 10,
  },
  {
    id: 13,
    name: "Tênis Casual",
    description:
      "Tênis casual moderno e confortável. Ideal para o dia a dia, proporcionando estilo e praticidade. Aproveite o desconto de R$15!",
    price: 89.99,
    quantityInStock: 50,
    categoryEnums: "SAPATOS",
    photoLink: "https://source.unsplash.com/featured/250x300?sneakers",
    stars: 4,
    offPrice: 15,
  },
  {
    id: 14,
    name: "Colar de Pérolas",
    description:
      "Colar de pérolas elegante e sofisticado. Um acessório que adiciona charme e refinamento ao seu visual. Aproveite o desconto de R$20!",
    price: 69.99,
    quantityInStock: 25,
    categoryEnums: "ACESSORIOS",
    photoLink: "https://source.unsplash.com/featured/250x300?pearl-necklace",
    stars: 5,
    offPrice: 20,
  },
  {
    id: 15,
    name: "Boné Esportivo",
    description:
      "Boné esportivo estiloso e confortável. Proteção contra o sol com muito estilo. Aproveite o desconto de R$10!",
    price: 34.99,
    quantityInStock: 40,
    categoryEnums: "ACESSORIOS",
    photoLink: "https://source.unsplash.com/featured/250x300?sport-cap",
    stars: 3,
    offPrice: 10,
  },
  {
    id: 16,
    name: "Mala de Viagem",
    description:
      "Mala de viagem espaçosa e resistente. Perfeita para suas aventuras, com design moderno e funcional. Aproveite o desconto de R$15!",
    price: 99.99,
    quantityInStock: 20,
    categoryEnums: "ACESSORIOS",
    photoLink: "https://source.unsplash.com/featured/250x300?travel-bag",
    stars: 4,
    offPrice: 15,
  },
  {
    id: 17,
    name: "Vestido de Festa",
    description:
      "Vestido de festa elegante e sofisticado. Ideal para ocasiões especiais, garantindo um visual deslumbrante. Aproveite o desconto de R$25!",
    price: 129.99,
    quantityInStock: 30,
    categoryEnums: "VESTIDOS",
    photoLink: "https://source.unsplash.com/featured/250x300?party-dress",
    stars: 5,
    offPrice: 25,
  },
  {
    id: 18,
    name: "Bermuda Cargo",
    description:
      "Bermuda cargo versátil e confortável. Perfeita para o dia a dia, com bolsos práticos e design moderno. Aproveite o desconto de R$10!",
    price: 49.99,
    quantityInStock: 60,
    categoryEnums: "CALCAS",
    photoLink: "https://source.unsplash.com/featured/250x300?cargo-shorts",
    stars: 4,
    offPrice: 10,
  },
  {
    id: 19,
    name: "Camisa Social",
    description:
      "Camisa social clássica e elegante. Perfeita para ocasiões formais, garantindo um visual refinado. Aproveite o desconto de R$15!",
    price: 79.99,
    quantityInStock: 40,
    categoryEnums: "CAMISAS",
    photoLink: "https://source.unsplash.com/featured/250x300?dress-shirt",
    stars: 4,
    offPrice: 15,
  },
  {
    id: 20,
    name: "Chapéu de Sol",
    description:
      "Chapéu de sol estiloso e funcional. Proteção contra os raios solares com muito charme. Aproveite o desconto de R$10!",
    price: 29.99,
    quantityInStock: 80,
    categoryEnums: "ACESSORIOS",
    photoLink: "https://source.unsplash.com/featured/250x300?sun-hat",
    stars: 3,
    offPrice: 10,
  },
  {
    id: 21,
    name: "Jaqueta Jeans",
    description:
      "Jaqueta jeans moderna e versátil. Com um design atemporal, é a peça ideal para complementar seu visual. Aproveite o desconto de R$15!",
    price: 89.99,
    quantityInStock: 35,
    categoryEnums: "CASACOS",
    photoLink: "https://source.unsplash.com/featured/250x300?denim-jacket",
    stars: 4,
    offPrice: 15,
  },
  {
    id: 22,
    name: "Sapato Social",
    description:
      "Sapato social elegante e sofisticado. Ideal para ocasiões formais, garantindo conforto e estilo. Aproveite o desconto de R$20!",
    price: 99.99,
    quantityInStock: 25,
    categoryEnums: "SAPATOS",
    photoLink: "https://source.unsplash.com/featured/250x300?dress-shoes",
    stars: 5,
    offPrice: 20,
  },
  {
    id: 23,
    name: "Saia Longa",
    description:
      "Saia longa versátil e elegante. Perfeita para criar looks femininos e modernos. Aproveite o desconto de R$10!",
    price: 69.99,
    quantityInStock: 45,
    categoryEnums: "SAIAS",
    photoLink: "https://source.unsplash.com/featured/250x300?long-skirt",
    stars: 4,
    offPrice: 10,
  },
  {
    id: 24,
    name: "Pulseira de Prata",
    description:
      "Pulseira de prata elegante e refinada. Um acessório que adiciona sofisticação ao seu visual. Aproveite o desconto de R$10!",
    price: 39.99,
    quantityInStock: 50,
    categoryEnums: "ACESSORIOS",
    photoLink: "https://source.unsplash.com/featured/250x300?silver-bracelet",
    stars: 4,
    offPrice: 10,
  },
  {
    id: 25,
    name: "Calça Legging",
    description:
      "Calça legging confortável e versátil. Ideal para atividades físicas ou looks casuais. Aproveite o desconto de R$10!",
    price: 39.99,
    quantityInStock: 70,
    categoryEnums: "FITNESS",
    photoLink: "https://source.unsplash.com/featured/250x300?leggings",
    stars: 3,
    offPrice: 10,
  },
  {
    id: 26,
    name: "Moletom Casual",
    description:
      "Moletom casual confortável e estiloso. Perfeito para os dias mais frios, com um design moderno. Aproveite o desconto de R$15!",
    price: 79.99,
    quantityInStock: 30,
    categoryEnums: "CASACOS",
    photoLink: "https://source.unsplash.com/featured/250x300?casual-sweatshirt",
    stars: 4,
    offPrice: 15,
  },
  {
    id: 27,
    name: "Chinelo Slide",
    description:
      "Chinelo slide confortável e moderno. Ideal para momentos descontraídos. Aproveite o desconto de R$10!",
    price: 24.99,
    quantityInStock: 90,
    categoryEnums: "SAPATOS",
    photoLink: "https://source.unsplash.com/featured/250x300?slide-sandals",
    stars: 3,
    offPrice: 10,
  },
  {
    id: 29,
    name: "Boné Snapback",
    description:
      "Boné snapback estiloso e versátil. Um acessório moderno para complementar seu visual. Aproveite o desconto de R$10!",
    price: 29.99,
    quantityInStock: 40,
    categoryEnums: "ACESSORIOS",
    photoLink: "https://source.unsplash.com/featured/250x300?snapback-hat",
    stars: 4,
    offPrice: 10,
  },
  {
    id: 30,
    name: "Blusa de Tricô",
    description:
      "Blusa de tricô confortável e elegante. Ideal para dias mais frescos, com um design clássico. Aproveite o desconto de R$15!",
    price: 69.99,
    quantityInStock: 25,
    categoryEnums: "BLUSAS",
    photoLink: "https://source.unsplash.com/featured/250x300?knit-sweater",
    stars: 4,
    offPrice: 15,
  },
  {
    id: 31,
    name: "Calça Cargo",
    description:
      "Calça cargo versátil e moderna, perfeita para compor looks casuais e confortáveis. Possui bolsos espaçosos e um ajuste confortável. Aproveite o desconto de R$10!",
    price: 59.99,
    quantityInStock: 35,
    categoryEnums: "CALCAS",
    photoLink: "https://source.unsplash.com/featured/250x300?cargo-pants",
    stars: 3,
    offPrice: 10,
  },
];

const useProducts = () => {
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
          (product) => product.categoryEnums === categoryValue,
        );
        setFilteredProducts(filtered);
      }
    },
    [setCategoria, setFilteredProducts],
  );

  const displayedProducts = categoria ? filteredProducts : products;

  return { displayedProducts, onSetCategoryClick, categoria };
};
export default useProducts;
