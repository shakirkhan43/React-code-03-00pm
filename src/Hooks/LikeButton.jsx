import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function LikeButton() {
  const [liked, setLiked] = useState(false);

//   const toggleLike = () => {
//     setLiked(!liked);
//   };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: liked ? "pink" : "#f0f0f0",
        transition: "all 0.4s ease",
        fontFamily: "sans-serif",
      }}
    >
      <button
        onClick={() => setLiked(!liked)}
        style={{
          background: "none",
          border: "none",
          fontSize: "60px",
          cursor: "pointer",
          color: liked ? "red" : "#555",
          transition: "all 0.3s ease",
        }}
      >
        {liked ? <FaHeart /> : <FaRegHeart />}
      </button>
      <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
        {liked ? "You liked this 💖" : "Do you like it?"}
      </p>
    </div>
  );
}

export default LikeButton;
