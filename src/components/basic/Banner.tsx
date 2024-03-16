interface BannerProps {
  title: string;
  text: string;
}

const Banner = ({ title, text }:BannerProps) => {
  return (
    <section id="banner" className="bg-orange-400 bg-opacity-15 overflow-visible my-0 py-12">
      <div className="text-black flex flex-col items-center text-center">
        <h2 className="font-bold text-2xl lg:text-4xl">{title}</h2>
        <p className="mx-auto mt-6 mb-6 w-3/4 md:w-2/3 text-md md:text-2xl text-slate-800 border-2 border-yellow-900 border-opacity-25 p-8 rounded-xl">
          {text}
        </p>
      </div>
    </section>
  );
}
export default Banner;