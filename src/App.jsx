import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="  mx-auto grid grid-flow-col auto-cols-auto gap-4 snap-x overflow-x-auto scroll-auto lg:max-w-lg p-4 scrollbar">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
