import React, { useState } from "react";
import "./Popup.css";
import BaseForm from "./BaseForm";

export default function Edit(props) {
  const [newInfoTaskEdited, setNewInfoTaskEdited] = useState([]);
  const [activeTrigger, setActiveTrigger] = useState(false);

  console.log(newInfoTaskEdited);

  const dataInfoTask = props.infoTask;

  return props.trigger ? (
    <div className="popup z-10">
      <div className="popup-inner">
        <h1>Edit</h1>
        <button className="close-btn">Close</button>
        {props.children}
        <BaseForm
          EditeNote={(obj) => setNewInfoTaskEdited([obj])}
          dataInfoTask={dataInfoTask}
          activeTrigger={(bol) => setActiveTrigger(bol)}
        ></BaseForm>
      </div>
    </div>
  ) : (
    ""
  );
}
