import React, { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-4 rounded-lg shadow-md cursor-pointer ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="font-bold text-gray-800 mb-2">
        {title}
      </h2>

      <p className="text-sm text-gray-600">
        {body}
      </p>
    </div>
  );
}

export default PostCard;