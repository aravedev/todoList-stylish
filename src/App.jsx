import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import { nanoid } from "nanoid";

function App() {
  const [memos, setMemos] = useState(
    () => JSON.parse(localStorage.getItem("task")) || []
  );

  const [editCard, setEditCard] = useState(false);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(memos));
  }, [memos]);

  function deleteTask(id) {
    const memosList = memos.filter((task) => task.id !== id);
    setMemos(memosList);
  }
  return (
    <main className="">
      <div
        className={`mx-auto grid grid-flow-col auto-cols-auto gap-4 snap-x snap-mandatory overflow-x-auto scroll-auto lg:max-w-2xl p-4 scrollbar ${
          memos.length === 1 ? "justify-center" : ""
        }`}
      >
        {memos.map((task) => {
          return (
            <Card
              key={nanoid()}
              id={task.id}
              title={task.title}
              description={task.description}
              important={task.important}
              category={task.category}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
      <div className="mt-10 flex justify-center items-center">
        <Form memos={(obj) => setMemos([obj, ...memos])}></Form>
      </div>
    </main>
  );
}

export default App;

/*
  useEffect(() => {
    () => handleAddNewTask();
    if (task.length > 0) {
      localStorage.setItem("task", JSON.stringify(task));
    }
  }, [task]);
*/
