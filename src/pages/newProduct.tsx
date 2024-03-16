import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import CreateNewProduct from "../components/product/CreateNewProducts";


export default function NewProductPage() {
  return (
    <section className="">
        <Navbar />
        <CreateNewProduct />
        <Footer />
    </section>
  );
}
