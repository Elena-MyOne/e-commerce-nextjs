"use client";

import { GiSettingsKnobs } from "react-icons/gi";
import { categoryOptions } from "@/lib/constants/categoryOptions";
import { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import "./MultiRangeSlider.css";

export default function Filters() {
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);

  return (
    <aside className="min-w-[300px] rounded-xl border p-4">
      <div className="divide-y">
        <div className="mb-4 flex items-center justify-between font-semibold">
          <h3>Filters</h3>
          <span className="cursor-pointer text-2xl duration-300 hover:text-secondary">
            <GiSettingsKnobs />
          </span>
        </div>
        <ul className="flex flex-col gap-3 py-4">
          {categoryOptions.map((option) => (
            <li
              key={option}
              className="cursor-pointer text-gray-500 duration-300 hover:text-secondary"
            >
              {option}
            </li>
          ))}
        </ul>
        <div className="py-4">
          <h3 className="font-semibold">Price</h3>
          <div className="">
            <MultiRangeSlider
              min={0}
              max={100}
              step={5}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e: ChangeResult) => {
                setMinValue(e.minValue);
                setMaxValue(e.maxValue);
              }}
              barLeftColor="#D9D5D2"
              barRightColor="#D9D5D2"
              barInnerColor="#151616"
              thumbLeftColor="#151616"
              thumbRightColor="#151616"
              label="false"
              ruler="false"
            ></MultiRangeSlider>
          </div>
          <div className="flex justify-between">
            <div className="">${minValue}</div>
            <div className="">${maxValue}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
