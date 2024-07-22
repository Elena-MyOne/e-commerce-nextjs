import imageMan from "../../assets/images/pages/home/dress-style/1.png";
import imageUnisex from "../../assets/images/pages/home/dress-style/2.png";
import imageKids from "../../assets/images/pages/home/dress-style/3.png";
import imageWoman from "../../assets/images/pages/home/dress-style/4.png";

export default function DressStyle() {
  return (
    <section className="mb-5 rounded-xl bg-accent p-4 lg:mb-10 lg:p-10">
      <h2 className="my-4 text-center font-custom text-2xl font-bold lg:my-8 lg:text-3xl">
        BROWSE BY dress STYLE
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <div
          className="h-[150px] cursor-pointer rounded-lg p-2 text-xl font-bold transition-shadow duration-300 hover:shadow-lg lg:col-span-2 lg:h-[250px] lg:p-4"
          style={{
            backgroundImage: `url(${imageMan.src})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#fff",
            backgroundPosition: "right top",
          }}
        >
          Men
        </div>
        <div
          className="h-[150px] cursor-pointer rounded-lg bg-base-100 p-2 text-xl font-bold transition-shadow duration-300 hover:shadow-lg lg:h-[250px] lg:p-4"
          style={{
            backgroundImage: `url(${imageUnisex.src})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#fff",
            backgroundPosition: "right center",
          }}
        >
          Unisex
        </div>
        <div
          className="h-[150px] cursor-pointer rounded-lg bg-base-100 p-2 text-xl font-bold transition-shadow duration-300 hover:shadow-lg lg:h-[250px] lg:p-4"
          style={{
            backgroundImage: `url(${imageKids.src})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#fff",
            backgroundPosition: "right center",
          }}
        >
          Kids
        </div>
        <div
          className="h-[150px] cursor-pointer rounded-lg bg-base-100 p-2 text-xl font-bold transition-shadow duration-300 hover:shadow-lg lg:col-span-2 lg:h-[250px] lg:p-4"
          style={{
            backgroundImage: `url(${imageWoman.src})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#fff",
            backgroundPosition: "right center",
          }}
        >
          Women
        </div>
      </div>
    </section>
  );
}
