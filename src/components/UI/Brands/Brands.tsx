import Image from "next/image";

export default function Brands() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 bg-[#151616] p-4 sm:gap-10">
      <div className="">
        <Image
          src="/assets/images/brands/1.png"
          alt="versace"
          width={100}
          height={34}
        />
      </div>
      <div className="">
        <Image
          src="/assets/images/brands/2.png"
          alt="versace"
          width={60}
          height={25}
        />
      </div>
      <div className="">
        <Image
          src="/assets/images/brands/3.png"
          alt="versace"
          width={100}
          height={34}
        />
      </div>
      <div className="">
        <Image
          src="/assets/images/brands/4.png"
          alt="versace"
          width={100}
          height={34}
        />
      </div>
      <div className="">
        <Image
          src="/assets/images/brands/5.png"
          alt="versace"
          width={100}
          height={34}
        />
      </div>
    </div>
  );
}
