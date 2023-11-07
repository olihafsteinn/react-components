import React, { useState } from "react";

const Button1 = () => {
  // State to track whether the card is being hovered or not
  const [isHovered, setIsHovered] = useState(false);

  // Function for hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const BtnStyle: React.CSSProperties = {
    color: isHovered ? "white" : "#3399FF",
    backgroundColor: isHovered ? "#3399FF" : "white",
    transition: "background-color 0.4s ease-in-out",
    borderRadius: ".5rem",
    border: "2px solid #3399ff",
    fontSize: "20px",
    fontWeight: "bold",
    height: "50px",
    width: "200px",
    cursor: "pointer",
    marginBottom: "1rem",
  };

  return (
    <>
      <button
        style={BtnStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 1
      </button>
    </>
  );
};

export default Button1;
