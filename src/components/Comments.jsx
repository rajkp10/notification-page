import React from "react";
import { data } from "../assets/data";
import Comment from "./Comment";

function Comments() {
  console.log(data);
  return (
    <div className="py-4 w-full flex flex-col justify-between items-stretch space-y-2">
      {data.map((person) => {
        return <Comment person={person} />;
      })}
    </div>
  );
}

export default Comments;
