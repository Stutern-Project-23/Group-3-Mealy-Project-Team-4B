import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import MealData from "./MealData";
import Cart from "./Cart";
import { AiTwotoneStar } from "react-icons/ai";

const SideSec = () => {
  const [active, setActive] = useState("Specials");

  return (
    <main className="py-5 md:flex justify-center px-3 md:px-20 gap-5 md:py-10">
      <section>
        <h1 className="text-2xl font-medium">Breakfast Hub</h1>
        <p className="text-lg">Good food to start your day right</p>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-yellow-500 text-xl">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
          <p>4.6 Excellent (70+)</p>
        </div>
        <div className="w-full flex items-center justify-center text-lg mt-3 pt-1 pb-2  px-3 bg-gray-200">
          <input
            type="search"
            className="placeholder:text-black h-full w-full bg-transparent focus:outline-none  rounded-xl mt-3 text-black"
            placeholder="Search menu items"
          />
          <BsSearch />
        </div>
        <hr className="w-full h-1 bg-gray-400 mt-3 rounded" />
        <div className="my-3 flex w-full justify-between items-center">
          <button
            onClick={() => {
              setActive("Specials");
            }}
            className={`${active === "Specials" && "active"}`}
          >
            Specials
          </button>
          <button
            onClick={() => {
              setActive("Quick Fixes");
            }}
            className={`${active === "Quick Fixes" && "active"}`}
          >
            Quick Fixes
          </button>
          <button
            onClick={() => {
              setActive("Extras & Sides");
            }}
            className={`${active === "Extras & Sides" && "active"}`}
          >
            Extras & Sides
          </button>
        </div>
        <article>
          <h2 className="bg-gray-200 py-2 px-3 text-lg font-semibold">
            {active}
          </h2>
          {MealData.map((item) => {
            return (
              <div
                className="grid grid-cols-3 gap-1 px-2 place-items-center py-4 border-2"
                key={item.id}
              >
                <div className="col-start-1 col-end-3">
                  <h3 className="text-lg font-semibold">{item.heading}</h3>
                  <p className="text-sm my-2">{item.text}</p>
                  <h4 className="text-normal font-semibold">
                    ${item.price.toLocaleString()}
                  </h4>
                </div>
                <img src={item.img} alt={item.heading} />
              </div>
            );
          })}
        </article>
      </section>
      <Cart />
    </main>
  );
};

export default SideSec;
