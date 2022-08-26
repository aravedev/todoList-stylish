import React from "react";

import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function BaseForm(props) {
  const [starEditImportant, setStartEditImportant] = useState(false);
  const [editInputForm, setEditInputForm] = useState("");
  const [editTextAreaForm, setEditTextAreaForm] = useState("");
  const [editCategory, setEditCategory] = useState("");

  const resumeProps = props.dataInfoTask;

  const starImage = starEditImportant ? (
    <AiFillStar></AiFillStar>
  ) : (
    <AiOutlineStar></AiOutlineStar>
  );

  const handleStarImportantIcon = () => {
    setStartEditImportant(!starEditImportant);
  };

  function handleEditInputForm(event) {
    const title = event.target.value;
    setEditInputForm(title);
  }

  function handleEditTextArea(event) {
    const textArea = event.target.value;
    setEditTextAreaForm(textArea);
  }

  function handleEditCategory(event) {
    const category = event.target.value;
    setEditCategory(category);
  }

  function handleEditTask() {
    const obj = {
      id: resumeProps.id,
      important: starEditImportant,
      title: editInputForm,
      description: editTextAreaForm,
      category: editCategory,
    };

    return obj;
  }

  function HideForm() {
    return false;
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }

  return (
    <form onSubmit={handleOnSubmit}>
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
            onChange={handleEditInputForm}
            type="text"
            placeholder={resumeProps.title}
            className="mb-2 w-3/4 rounded-lg py-1 text-black font-semibold px-5 "
          />
          <textarea
            onChange={handleEditTextArea}
            cols="36"
            rows="5"
            className="rounded-lg text-black font-semibold px-2"
            placeholder={resumeProps.description}
          ></textarea>
          <div className="w-full  p-2 flex justify-between">
            <label htmlFor="category">Category:</label>
            <select
              onChange={handleEditCategory}
              name="category"
              id=""
              className="bg-backgroundDarkBlue"
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
            <button
              type="submit"
              href="#"
              onClick={() => {
                props.EditeNote(handleEditTask());
                props.activeTrigger(HideForm());
              }}
            >
              <BiEdit className="w-8 h-8"></BiEdit>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
