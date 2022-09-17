import React from "react";

function Comment({ person }) {
  const { avatar, name, action, comment, group, timeline, post } = person;
  return (
    <div className="p-2 flex justify-between bg-VeryLightGrayishBlue rounded-md space-x-2">
      <div className="flex flex-row space-x-4">
        <img
          src="https://www.gstatic.com/webp/gallery/4.sm.webp"
          alt={name}
          className="h-11 w-11 rounded-full"
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
              <span className="font-bold cursor-pointer text-Blue">
                {group}
              </span>
            )}
          </div>
          <div>
            <span className="text-sm text-GrayishBlue">{timeline}</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://www.gstatic.com/webp/gallery/4.sm.webp"
          alt=""
          className="h-10 w-10 rounded-md"
        />
      </div>
    </div>
  );
}

export default Comment;
