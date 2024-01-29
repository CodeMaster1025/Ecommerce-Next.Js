import Carousel from "../components/basic/Carousel";
import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import ProductsCards from "../components/product/ProductsCards";
import ProductsHorizontalList from "../components/product/HorizontalProductsList";
import ProductsDescription from "@/components/product/ProductDescription";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Carousel />
      <ProductsHorizontalList />
      <ProductsCards />
      <Footer />
    </main>
  );
}
