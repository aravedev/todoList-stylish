import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  console.log(memos);

  return (
    <main className="">
      <div className=" mx-auto grid grid-flow-col auto-cols-auto gap-4 snap-x snap-mandatory overflow-x-auto scroll-auto lg:max-w-2xl p-4 scrollbar">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mt-10 flex justify-center items-center">
        <Form></Form>
      </div>
    </main>
  );
}

export default App;
