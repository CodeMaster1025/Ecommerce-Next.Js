import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductsCards from "./components/ProductsCards";
import ProductsHorizontalList from "./components/HorizontalProductsList";
import ProductsCarrinho from "./components/ProductsCarrinho";

export default function Carrinho() {
  return (
    <main className="">
        <Navbar />
        <Carousel />
        <ProductsCarrinho />
        <Footer />
    </main>
  );
}
