import React from "react";
import Comment from "./Comment";

function Comments({ persons, handleClick }) {
  if (!persons) {
    return;
  }

  return (
    <div className="py-4 w-full flex flex-col justify-between items-stretch space-y-2">
      {persons.map((person) => {
        return <Comment person={person} handleClick={handleClick} />;
      })}
    </div>
  );
}

export default Comments;
