"use client";
import CountUp from "react-countup";

export default function Statistics() {
  return (
    <div className="flex flex-wrap gap-4 py-4">
      <div className="border-r border-gray-300 pr-4">
        <p className="min-w-[136px] text-3xl font-bold">
          <CountUp start={1} end={200} duration={2} />+
        </p>
        <p>Popular Brands</p>
      </div>
      <div className="border-r border-gray-300 px-4">
        <p className="min-w-[136px] text-3xl font-bold">
          <CountUp start={1} end={2000} duration={2} />+
        </p>
        <p>Products</p>
      </div>
      <div className="xsm:pl-0 pl-4">
        <p className="min-w-[136px] text-3xl font-bold">
          <CountUp start={1} end={30000} duration={2} />+
        </p>
        <p>Happy Customers</p>
      </div>
    </div>
  );
}
