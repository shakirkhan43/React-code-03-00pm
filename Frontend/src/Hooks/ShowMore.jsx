// ShowMore.jsx
import React, { useState } from "react";

const ShowMore = () => {
  const [showFull, setShowFull] = useState(false);

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis nunc at purus cursus, nec condimentum nulla blandit. Sed quis libero ut odio sodales efficitur. Nam ullamcorper.";

  return (
    <div className="bg-zinc-900 text-white p-50 text-center w-full h-screen">
      <h2>📖 Show More / Show Less</h2>

      <p>
        {showFull ? text : `${text.substring(0, 100)}...`}
      </p>

      <button
        className="bg-green-500 px-3 py-1 rounded cursor-pointer mt-5 mx-5"
        onClick={() => setShowFull(!showFull)}
        style={{ padding: "5px 10px" }}
      >
        {showFull ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ShowMore;
