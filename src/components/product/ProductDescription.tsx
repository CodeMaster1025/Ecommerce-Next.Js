import useCart from "@/hooks/useCart";
import useProductsDescription from "@/hooks/useProductDescription";
import { useEffect } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantityInStock: number;
  categoryEnums: string;
  photoLink: string;
  offPrice: number;
  stars: number;
};

export default function ProductionDescription(): JSX.Element {
  const { products } = useProductsDescription(1);
  const { addToCart } = useCart();

  // Assuming products is an array and there's only one product with the specified ID
  const selectedProduct = products[0];

  const discountedPrice = (price: number, offPrice: number) => {
    return price * ((price * offPrice) / 100);
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="product"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={selectedProduct?.photoLink}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                GIOM
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {selectedProduct?.name}
            </h1>
            {/* Add star rating or other details here if needed */}
            <p className="leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus, commodi excepturi quia porro ad quaerat assumenda, corrupti voluptas error ea obcaecati recusandae. Quae exercitationem harum quisquam eos ducimus. Eos! </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${discountedPrice(selectedProduct?.price || 0, selectedProduct?.offPrice || 0)}
              </span>
              <button
                onClick={() => addToCart(selectedProduct)}
                className="flex ml-auto text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                ADICIONAR NO CARRINHO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
