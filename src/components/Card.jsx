import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Edit from "./Edit";
import { useState } from "react";

export default function Card(props) {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowPopUp = () => setShowPopUp(true);

  return (
    <div>
      <div className="w-96 h-90 border p-6 bg-backgroundDarkBlue text-white font-light rounded-lg opacity-90 snap-center shadow-2xl ">
        <div className=" flex justify-between items-center mb-4 ">
          <div className="border w-8 h-8 flex justify-center items-center rounded-full text-yellow-600 ">
            <a href="#">
              {props.important ? (
                <AiFillStar></AiFillStar>
              ) : (
                <AiOutlineStar></AiOutlineStar>
              )}
            </a>
          </div>
          <div className="space-x-2">
            <span className="border px-4 py-1 rounded-3xl hover:bg-buttonOrange hover:text-white">
              <a href="#" onClick={handleShowPopUp}>
                Edit
              </a>
            </span>
            <span className="border px-2 py-1 rounded-3xl space-x-3 ">
              {props.category}
            </span>
          </div>
        </div>

        <h2 className="text-3xl mb-3 text-left px-4"> {props.title} </h2>
        <p className="leading-6  p-4 mb-3 text-left text-sm md:text-md ">
          {props.description}
        </p>
        <button
          onClick={() => props.deleteTask(props.id)}
          className="bg-yellow-50 w-2/3 rounded-[20px] px-4 py-2 font-bold text-buttonOrange hover:bg-buttonOrange hover:text-white mb-3"
        >
          Delete Task
        </button>
      </div>
      <div>
        <Edit trigger={showPopUp} infoTask={props}></Edit>
      </div>
    </div>
  );
}
