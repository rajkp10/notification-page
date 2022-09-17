import "./App.css";
import Header from "./components/Header";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center md:bg-VeryLightGrayishBlue">
      <div className="mx-3 my-2 md:px-6 md:py-4 flex flex-col w-screen bg-White md:w-1/2 md:rounded-lg">
        <Header />
        <Comments />
      </div>
    </div>
  );
}

export default App;
