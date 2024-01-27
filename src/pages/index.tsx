import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductsCards from "./components/ProductsCards";
import ProductsHorizontalList from "./components/HorizontalProductsList";

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
