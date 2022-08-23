import React from "react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useEffect } from "react";

export default function Form() {
  const [task, setTask] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");
  const [starImportant, setStartImportant] = useState(false);
  const [category, setCategory] = useState("");

  const starImage = starImportant ? (
    <AiFillStar></AiFillStar>
  ) : (
    <AiOutlineStar></AiOutlineStar>
  );

  const handleStarImportantIcon = () => {
    setStartImportant(!starImportant);
  };

  const handleInputTextArea = (event) => {
    let textArea = event.target.value;
    setInputTextArea(textArea);
  };

  const handleInputText = (event) => {
    let inputText = event.target.value;
    setInputText(inputText);
  };

  const handleCategory = (event) => {
    const nameCategory = event.target.value;
    setCategory(nameCategory);
  };

  useEffect(() => {
    () => handleAddNewTask();
    if (task.length > 0) {
      //console.log("Say hi");
      // console.log(task);
      localStorage.setItem("task", JSON.stringify(task));
      //console.log(parse);
    }
  }, [task]);

  const handleAddNewTask = () => {
    const obj = {
      id: task.length,
      title: inputText,
      description: inputTextArea,
      category: category,
      important: starImportant,
    };

    setTask((prevState) => [obj, ...prevState]);
  };

  return (
    <div className="w-96 h-90 border p-6 bg-backgroundDarkBlue text-white font-light rounded-lg opacity-90 snap-center shadow-2xl flex flex-col">
      <div className=" flex justify-around items-baseline mb-2">
        <span className="font-semibold ">Mark as Important</span>
        <div className="border w-8 h-8 flex justify-center items-center rounded-full text-yellow-600">
          <a href="#" onClick={handleStarImportantIcon}>
            {starImage}
          </a>
        </div>
      </div>

      <div className="mb-4 flex flex-col items-start justify-center  p-2">
        <input
          onChange={handleInputText}
          type="text"
          placeholder=" Add Title"
          className="mb-2 w-3/4 rounded-lg py-1 text-black font-semibold px-5 "
        />
        <textarea
          onChange={handleInputTextArea}
          cols="36"
          rows="5"
          className="rounded-lg text-black font-semibold px-2"
          placeholder=" Add Description..."
        ></textarea>
        <div className="w-full  p-2 flex justify-between">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id=""
            className="bg-backgroundDarkBlue"
            onChange={handleCategory}
          >
            <option value="--">-- --</option>
            <option value="hobbies">Hobbies</option>
            <option value="grocery">Grocery</option>
            <option value="work">Work</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div className=" grid  gap-4 place-items-end ">
        <div className="bg-yellow-50 w-12 h-12 rounded-[25px] px-4 py-2 font-bold text-buttonOrange hover:bg-buttonOrange hover:text-white mb-3 flex justify-center items-center">
          <a href="#" onClick={handleAddNewTask}>
            <BiEdit className="w-8 h-8"></BiEdit>
          </a>
        </div>
      </div>
    </div>
  );
}
