import { useRouter } from "next/router";
import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import ProductsCards from "../components/product/ProductsCards";
import CarouselFlow from "@/components/basic/PrimaryCarousel";
import CarouselGrid from "@/components/basic/SecondaryCarousel";
import Categories from "@/components/product/Categories";
import Comments from "@/components/basic/Comments";
import Banner from "@/components/basic/Banner";

const Home = () => {
  const router = useRouter();
  const { category } = router.query;

  const primareCarouselList = "https://source.unsplash.com/featured/960x540?skirts,https://source.unsplash.com/featured/960x540?blouses,https://source.unsplash.com/featured/960x540?Pants,https://source.unsplash.com/featured/960x540?Scarf";
  const primareSrcList = primareCarouselList.split(',');

  const secondaryCarouselList = "https://source.unsplash.com/featured/960x540?plantas,https://source.unsplash.com/featured/960x540?trees,https://source.unsplash.com/featured/960x540?nature";
  const secondarySrcList = secondaryCarouselList.split(',');
  const title = "Nossa História";
  const text = "Há muitos anos, nasceu uma loja que viria a se tornar uma referência em estilo, elegância e moda contemporânea. Essa loja, batizada de Moça Chic, não é apenas um espaço para compras, mas uma narrativa rica em história e compromisso com a expressão individual através da moda. A história da Loja Moça Chic começou com a visão apaixonada de sua fundadora, Maria Fernanda, uma mulher vibrante e cheia de criatividade. Determinada a criar um espaço que fosse mais do que uma simples vitrine de roupas, ela desejava construir um refúgio onde a moda pudesse contar histórias, abraçar a diversidade e empoderar aqueles que cruzassem seu caminho.";

  return (
    <section>
      <Navbar />
      <Categories />
      <CarouselFlow src={primareSrcList} />
      <CarouselGrid src={secondarySrcList} />
      <ProductsCards categoryProps={category} />
      <Comments />
      <Banner title={title} text={text}/>
      <Footer />
    </section>
  );
}
export default Home;
