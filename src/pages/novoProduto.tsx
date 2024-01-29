import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import Banner from "../components/basic/Banner";
import CreateNewProduct from "../components/product/CreateNewProducts";
import ProductionDescription from "@/components/product/ProductDescription";


export default function novoProduto() {
  return (
    <main className="">
        <Navbar />
        <ProductionDescription />
        <Banner />
        <Footer />
    </main>
  );
}
