import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import Banner from "../components/basic/Banner";
import ProductDatails from "@/components/product/ProductDetails";
import Comments from "@/components/basic/Comments";
import { useRouter } from "next/router";
import Categories from "@/components/product/Categories";

export default function ProductDescriptionPage() {
  const router = useRouter();
  const { id } = router.query;

  const title = "Nossa História";
  const text =
    "Há muitos anos, nasceu uma loja que viria a se tornar uma referência em estilo, elegância e moda contemporânea. Essa loja, batizada de Moça Chic, não é apenas um espaço para compras, mas uma narrativa rica em história e compromisso com a expressão individual através da moda. A história da Loja Moça Chic começou com a visão apaixonada de sua fundadora, Maria Fernanda, uma mulher vibrante e cheia de criatividade. Determinada a criar um espaço que fosse mais do que uma simples vitrine de roupas, ela desejava construir um refúgio onde a moda pudesse contar histórias, abraçar a diversidade e empoderar aqueles que cruzassem seu caminho.";

  return (
    <section className="">
      <Navbar />
      <Categories />
      <ProductDatails id={id} />
      <Comments />
      {/* <Banner title={title} text={text} /> */}
      <Footer />
    </section>
  );
}
