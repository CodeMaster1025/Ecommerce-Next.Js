import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import Banner from "../components/basic/Banner";
import CreateNewProduct from "../components/product/CreateNewProducts";


export default function NewProductPage() {
  return (
    <section className="">
        <Navbar />
        <CreateNewProduct />
        <Banner />
        <Footer />
    </section>
  );
}
