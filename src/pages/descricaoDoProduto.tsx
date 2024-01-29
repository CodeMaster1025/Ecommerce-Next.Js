import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import Banner from "../components/basic/Banner";
import ProductionDescription from "@/components/product/ProductDescription";


export default function descricaoDoProduto() {
  return (
    <main className="">
        <Navbar />
        <ProductionDescription />
        <Banner />
        <Footer />
    </main>
  );
}
