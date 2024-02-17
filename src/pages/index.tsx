import { useRouter } from "next/router";
import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import ProductsCards from "../components/product/ProductsCards";
import CarouselFlow from "@/components/basic/CarouselFlow";
import CarouselGrid from "@/components/basic/CarouselGrid";
import Categories from "@/components/product/Categories";
import Comments from "@/components/basic/Comments";
import Banner from "@/components/basic/Banner";
import CollectionGrid from "@/components/product/CollectionGrid";

export default function Home() {
  const router = useRouter();
  const { category } = router.query;
  
  return (
    <section className="">
      <Navbar />
      <Categories />
      <CarouselFlow />
      <CarouselGrid />
      <CollectionGrid/>
      <ProductsCards categoryProps={category}/>
      <Comments />
      <Banner />
      <Footer />
    </section>
  );
}
