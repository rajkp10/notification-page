import React from "react";

function Comment({ person, handleClick }) {
  if (!person) {
    return;
  }

  const {
    avatar,
    name,
    action,
    comment,
    group,
    timeline,
    message,
    post,
    isNew,
  } = person;

  return (
    <div
      className={`p-2 flex justify-between ${
        isNew ? "bg-VeryLightGrayishBlue" : ""
      } rounded-md space-x-2`}
      onClick={() => handleClick(name)}
    >
      <div className="flex flex-row space-x-4">
        <img
          src={avatar}
          alt={name}
          className="h-10 w-10 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 hover:cursor-pointer"
        />
        <div className="flex flex-col">
          <div className="space-x-2">
            <h3 className="inline font-bold hover:text-Blue hover:cursor-pointer">
              {name}
            </h3>
            <span className="text-DarkGrayishBlue">{action}</span>
            {comment !== "#" && (
              <span className="font-bold cursor-pointer text-DarkGrayishBlue hover:text-Blue">
                {comment}
              </span>
            )}
            {group !== "#" && (
              <span className="font-bold cursor-pointer text-DarkGrayishBlue hover:text-Blue">
                {group}
              </span>
            )}
            {isNew && (
              <div className="inline-block h-2 w-2 bg-Red rounded-full"></div>
            )}
          </div>
          <div>
            <span className="text-sm text-GrayishBlue">{timeline}</span>
          </div>
          {message !== "#" && (
            <div className="p-2 my-2 border-LightGrayishBlue2 border-2 rounded-md hover:bg-LightGrayishBlue2 hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-6 hover:scale-125 duration-300">
              <span className="text-DarkGrayishBlue">{message}</span>
            </div>
          )}
        </div>
      </div>
      {post !== "#" && (
        <div>
          <img
            src={post}
            alt=""
            className="h-10 w-10 rounded-md ring-GrayishBlue hover:ring-2 hover:cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

export default Comment;
