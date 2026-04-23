import BannerSlider from "../sliders/BannerSlider";

interface Banner2Props {
  images: string[];
  title: string;
}
const Banner2: React.FC<Banner2Props> = ({ images, title }) => {
  return (
    <section className="relative max_screen_width">
      <BannerSlider
        images={images}
        wrapperClassName="md:aspect-4/2.25 aspect-4/4.5"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute md:inset-x-3.25 inset-x-1.5 inset-y-3 border border-white z-20">
        <div className="max_width lg:mt-40 max-md:flex items-center justify-center h-full">
          <h1 className="text-white md:text-5xl/tight md:max-w-md max-md:text-center text-3xl font-primary uppercase">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
