import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Card() {
  return (
    <div className="w-96 h-90 border p-6 bg-backgroundDarkBlue text-white font-light rounded-lg opacity-90 snap-center shadow-2xl ">
      <div className=" flex justify-between items-center mb-4 ">
        <div className="border w-8 h-8 flex justify-center items-center rounded-full  ">
          <a href="#">
            <AiFillStar />
          </a>
        </div>
        <span className="border px-2 py-1 rounded-3xl ">Category</span>
      </div>

      <h2 className="text-3xl mb-3 text-left px-4">Task Title</h2>
      <p className="leading-6  p-4 mb-3 text-left text-sm md:text-md ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia quos
        debitis tempora. Libero iste, modi aspernatur provident necessitatibus
        nam, quia quam hic eum, repellendus quis fuga earum dolor quod.
      </p>
      <button className="bg-yellow-50 w-2/3 rounded-[20px] px-4 py-2 font-bold text-buttonOrange hover:bg-buttonOrange hover:text-white mb-3">
        Delete Task
      </button>
    </div>
  );
}
