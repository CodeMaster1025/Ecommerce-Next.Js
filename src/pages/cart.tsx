import CartComponent from "../components/cart/CartComponent";
import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import Banner from "../components/basic/Banner";


export default function Cart() {
  return (
    <main className="">
        <Navbar />
        <CartComponent />
        <Banner />
        <Footer />
    </main>
  );
}
