import PrimaryButton from "../UI/buttons/PrimaryButton";
import image from "../../assets/images/pages/home/hero/hero.png";
import Statistics from "../UI/Statistics/Statistics";
import Brands from "../UI/Brands/Brands";

export default function HeroComponent() {
  return (
    <>
      <div
        className="relative w-full bg-[#EDE9E6] bg-contain bg-right"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative flex w-full flex-col gap-10 bg-[#EDE9E6] px-4 py-6 md:p-10 lg:w-[650px]">
          <h1 className="text-center font-custom text-3xl md:text-left md:text-5xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <PrimaryButton text="Shop now" href="/category" />
          <Statistics />
        </div>
      </div>
      <Brands />
    </>
  );
}
