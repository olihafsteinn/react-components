import React, { useState } from "react";

const Button2 = () => {
  // State to track whether the card is being hovered or not
  const [isHovered, setIsHovered] = useState(false);

  // Function for hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const BtnStyle2: React.CSSProperties = {
    color: isHovered ? "white" : "#88CC00",
    backgroundColor: "white",
    backgroundImage: "linear-gradient(to right, transparent 50%, #88CC00 50%)",
    backgroundSize: "200%",
    backgroundPosition: isHovered ? "100%" : "0%",
    transition: "0.4s",
    borderRadius: ".5rem",
    border: "2px solid #88CC00",
    fontSize: "20px",
    fontWeight: "bold",
    height: "50px",
    width: "200px",
    cursor: "pointer",
  };

  return (
    <>
      <button
        style={BtnStyle2}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 2
      </button>
    </>
  );
};

export default Button2;
