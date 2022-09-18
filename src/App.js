import "./App.css";
import Header from "./components/Header";
import Comments from "./components/Comments";
import { data } from "./assets/data";
import { useState } from "react";

function App() {
  const [persons, setPersons] = useState(data);
  const [count, setCount] = useState(3);

  const handleClick = (name, isNew) => {
    const newPersons = persons.map((person) => {
      if (person.name === name && isNew === true) {
        return { ...person, isNew: false };
      } else {
        return person;
      }
    });
    if (count != 0) {
      setCount(count - 1);
    }
    setPersons(newPersons);
  };

  const handleMarkAllRead = () => {
    const newPersons = persons.map((person) => {
      if (person.isNew === true) {
        return { ...person, isNew: false };
      } else {
        return person;
      }
    });
    setCount(0);
    setPersons(newPersons);
  };

  return (
    <div className="min-h-screen flex justify-center items-center md:bg-VeryLightGrayishBlue">
      <div className="container mx-3 my-2 md:px-6 flex flex-col w-screen bg-White md:shadow-xl md:w-1/2 md:rounded-lg">
        <Header count={count} handleMarkAllRead={handleMarkAllRead} />
        <Comments persons={persons} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
