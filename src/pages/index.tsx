import { useRouter } from "next/router";
import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import ProductsCards from "../components/product/ProductsCards";
import CarouselFlow from "@/components/basic/PrimaryCarousel";
import CarouselGrid from "@/components/basic/SecondaryCarousel";
import Categories from "@/components/product/Categories";
import Comments from "@/components/basic/Comments";
import WhatsAppLogo from "@/components/ui/WhatsAppLogo";
import useImages from "../hooks/useImages"; // Importa o hook personalizado

const Home = () => {
  const router = useRouter();
  const { category } = router.query;

  // Usa o hook para buscar imagens do Unsplash
  const { images: primaryImage, loading: primaryLoading, error: primaryError } = useImages('nature');
  const { images: secondaryImage, loading: secondaryLoading, error: secondaryError } = useImages('fashion');

  if (primaryLoading || secondaryLoading) {
    return <p>Carregando imagens...</p>; // Mensagem enquanto as imagens são carregadas
  }

  if (primaryError || secondaryError) {
    return <p>Erro ao carregar imagens.</p>; // Mensagem de erro
  }

  // Utiliza as imagens retornadas pela API
  const primareSrcList = primaryImage ? [primaryImage] : [];
  const secondarySrcList = secondaryImage ? [secondaryImage] : [];

  const title = "Nossa História";
  const text =
    "Há muitos anos, nasceu uma loja que viria a se tornar uma referência em estilo, elegância e moda contemporânea. Essa loja, batizada de Moça Chic, não é apenas um espaço para compras, mas uma narrativa rica em história e compromisso com a expressão individual através da moda. A história da Loja Moça Chic começou com a visão apaixonada de sua fundadora, Maria Fernanda, uma mulher vibrante e cheia de criatividade. Determinada a criar um espaço que fosse mais do que uma simples vitrine de roupas, ela desejava construir um refúgio onde a moda pudesse contar histórias, abraçar a diversidade e empoderar aqueles que cruzassem seu caminho.";

  return (
    <section>
      <Navbar />
      <Categories />
      <CarouselFlow src={primareSrcList} />
      <CarouselGrid src={secondarySrcList} />
      <ProductsCards categoryProps={category} />
      <Footer />
      <WhatsAppLogo />
    </section>
  );
};

export default Home;
