import React from "react";

function Header({ count, handleMarkAllRead }) {
  return (
    <div className="py-4 flex justify-between items-center">
      <div className="flex justify-between space-x-2 items-baseline">
        <h2 className="text-xl font-bold">Notifications</h2>
        <span className="px-3 bg-Blue rounded-lg font-bold text-White">
          {count}
        </span>
      </div>
      <span
        className="text-DarkGrayishBlue cursor-pointer hover:text-Blue"
        onClick={handleMarkAllRead}
      >
        Mark all as read
      </span>
    </div>
  );
}

export default Header;
