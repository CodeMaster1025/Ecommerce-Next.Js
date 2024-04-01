interface BannerProps {
  title: string;
  text: string;
}

const Banner = ({ title, text }: BannerProps) => {
  return (
    <section
      id="banner"
      className="py-12 my-0 overflow-visible bg-orange-400 bg-opacity-15"
    >
      <div className="flex flex-col items-center text-center text-black">
        <h2 className="text-2xl font-bold lg:text-4xl">{title}</h2>
        <p className="w-3/4 p-8 mx-auto mt-6 mb-6 border-2 border-yellow-900 border-opacity-25 md:w-2/3 text-md md:text-2xl text-slate-800 rounded-xl">
          {text}
        </p>
      </div>
    </section>
  );
};
export default Banner;
