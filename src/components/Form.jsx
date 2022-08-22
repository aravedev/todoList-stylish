import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

export default function Form() {
  return (
    <div className="w-96 h-90 border p-6 bg-backgroundDarkBlue text-white font-light rounded-lg opacity-90 snap-center shadow-2xl flex flex-col">
      <div className=" flex justify-around items-baseline mb-2">
        <span className="font-semibold ">Mark as Important</span>
        <div className="border w-8 h-8 flex justify-center items-center rounded-full ">
          <a href="#">
            <AiFillStar />
          </a>
        </div>
      </div>

      <div className="mb-4 flex flex-col items-start justify-center  p-2">
        <input
          type="text"
          placeholder=" Add Title"
          className="mb-2 w-3/4 rounded-lg py-1 "
        />
        <textarea
          name=""
          id=""
          cols="43"
          rows="5"
          className="rounded-lg "
          placeholder=" Add Description..."
        ></textarea>
        <div className="w-full  p-2 flex justify-between">
          <label htmlFor="category">Category:</label>
          <select name="category" id="" className="bg-backgroundDarkBlue">
            <option value="hobbies">Hobbies</option>
            <option value="grocery">Grocery</option>
            <option value="work">Work</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div className=" grid  gap-4 place-items-end ">
        <div className="bg-yellow-50 w-12 h-12 rounded-[25px] px-4 py-2 font-bold text-buttonOrange hover:bg-buttonOrange hover:text-white mb-3 flex justify-center items-center">
          <a href="#">
            <BiEdit className="w-8 h-8"></BiEdit>
          </a>
        </div>
      </div>
    </div>
  );
}
