import { useRouter } from "next/router";
import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import ProductsCards from "../components/product/ProductsCards";
import CarouselFlow from "@/components/basic/CarouselFlow";
import CarouselGrid from "@/components/basic/CarouselGrid";
import Categories from "@/components/product/Categories";

export default function Home() {
  const router = useRouter();
  const { category } = router.query;
  
  return (
    <main className="">
      <Navbar />
      <Categories />
      <CarouselFlow />
      <CarouselGrid />
      <ProductsCards categoryProps={category}/>
      <Footer />
    </main>
  );
}
