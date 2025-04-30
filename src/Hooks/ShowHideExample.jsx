import React, { useState } from "react";

const ShowHideExample = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis nunc at purus cursus, nec condimentum nulla blandit. Sed quis libero ut odio sodales efficitur. Nam ullamcorper There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc..";

  return (
    <div className="bg-zinc-900 text-white p-50 text-center w-full h-screen">
      <h2>🔐 Show/Hide Password</h2>

      <input 
        className="px-3 py-1 rounded bg-zinc-500"
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />
      <button 
        className="bg-green-500 px-3 py-1 rounded cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
        style={{ marginLeft: "10px" }}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
      <br/>
      <br/>
      <br/>
      <br/>

      <hr />

      <h2 className="mt-50">📖 Show More / Show Less</h2>
      <p>
        {showMore ? longText : `${longText.substring(0, 80)}...`}
      </p>
      <button className="bg-green-500 px-3 py-1 rounded cursor-pointer" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ShowHideExample;
