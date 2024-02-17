import CartComponent from "../components/cart/CartComponent";
import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import Banner from "../components/basic/Banner";
import Comments from "@/components/basic/Comments";


export default function Cart() {
  return (
    <section className="">
        <Navbar />
        <CartComponent />
        <Comments />
        <Banner />
        <Footer />
    </section>
  );
}
