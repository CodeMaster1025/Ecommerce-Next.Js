import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import Banner from "../components/basic/Banner";
import ProductDatails from "@/components/product/ProductDetails";
import Comments from "@/components/basic/Comments";
import { useRouter } from "next/router";


export default function ProductDescriptionPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <section className="">
        <Navbar />
        <ProductDatails idProps={id}/>
        <Comments />
        <Banner />
        <Footer />
    </section>
  );
}
