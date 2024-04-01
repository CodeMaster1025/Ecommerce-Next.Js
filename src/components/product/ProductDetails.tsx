import React, { useContext, useEffect, useState } from "react";
import useProductsDescription from "@/hooks/useProductDescription";
import { ProgressSpinner } from "primereact/progressspinner";
import useLoading from "@/hooks/useLoading";
import CartContext from "../context/CartContext";
import Link from "next/link";

interface productId {
  id: number | string | string[] | undefined;
}

const ProductDatails = ({ id }: productId): JSX.Element => {
  const { addToCart } = useContext(CartContext);
  const [props, setProps] = useState<number>(0);
  const { productsDescription } = useProductsDescription(props);

  useEffect(() => {
    if (id) {
      setProps(+id);
    }
  }, [id]);

  const { loading, handleImageLoad } = useLoading();

  if (!productsDescription || !productsDescription[0]) {
    return <p>Carregando...</p>;
  }

  const discountedPrice = (
    productsDescription[0].price -
    (productsDescription[0].price * productsDescription[0].offPrice) / 100
  ).toFixed(2);

  return (
    <div className="my-8 overflow-hidden text-gray-800 md:my-16 body-font">
      <div className="container px-8 py-8 mx-auto">
        <div className="flex flex-wrap mx-auto lg:w-4/5">
          <img
            onLoad={handleImageLoad}
            alt="ecommerce"
            className={`w-full md:h-1/3 md:w-1/3 object-cover object-center rounded-md border border-gray-200 ${loading ? "hidden" : "block"}`}
            src={productsDescription[0].photoLink}
          ></img>
          <span className="flex items-center justify-end">
            {loading && (
              <ProgressSpinner
                style={{ width: "100px", height: "100px" }}
                strokeWidth="2"
                fill="transparent"
                animationDuration=".5s"
              />
            )}
          </span>
          <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
            <h2 className="text-sm tracking-widest text-gray-500 title-font">
              GIOM
            </h2>
            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
              {productsDescription[0].name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="ml-3 text-gray-600">
                  {productsDescription[0].stars}
                </span>
              </span>
              <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200">
                <Link href={"/"} className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link href={"/"} className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </Link>
                <Link href={"/"} className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </Link>
              </span>
            </div>
            <p className="leading-relaxed">
              {productsDescription[0].description}
            </p>
            <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-700 border-opacity-25">
              <div className="flex">
                <span className="mr-3">Cores:</span>
                <button className="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                <button className="w-6 h-6 ml-1 bg-gray-700 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                <button className="w-6 h-6 ml-1 bg-yellow-500 border-2 border-gray-300 rounded-full focus:outline-none"></button>
              </div>
              <div className="flex items-center ml-6">
                <span className="mr-3">Tamanhos:</span>
                <div className="relative">
                  <select className="py-2 pl-3 pr-10 text-base bg-orange-100 border border-gray-400 rounded appearance-none focus:outline-none focus:border-yellow-500">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="text-2xl font-medium text-gray-900">
                ${discountedPrice}
              </span>
              <button
                onClick={() => addToCart(productsDescription[0])}
                className="flex p-2 ml-auto text-white bg-orange-300 bg-opacity-75 border-0 rounded-full hover:bg-orange-400 focus:outline-none "
              >
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 11.01V11M16 11.01V11M8 8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8M8 8H6.84027C5.80009 8 4.93356 8.79732 4.84718 9.83391L4.18051 17.8339C4.08334 18.9999 5.00352 20 6.1736 20H17.8264C18.9965 20 19.9167 18.9999 19.8195 17.8339L19.1528 9.83391C19.0664 8.79732 18.1999 8 17.1597 8H16M8 8H16"
                    stroke="#000000"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDatails;
