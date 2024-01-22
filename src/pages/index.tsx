import Carrosel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductsCards from "./components/ProductsCards";
import ProductsHorizontalList from "./components/HorizontalProductsList";

export default function Home() {
  return (
    <main className="p-0 m-0">
        <Navbar />
        <Carrosel />
        <ProductsHorizontalList />
        <ProductsCards />
        <Footer />
    </main>
  );
}
