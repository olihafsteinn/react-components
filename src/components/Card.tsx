import React, { useState } from "react";
import CardImage from "../images/700w.jpg";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverScale = "scale(1.02)";
  const notHover = "scale(1)";

  const CardStyle: React.CSSProperties = {
    backgroundColor: "#F5F5F5",
    borderRadius: "1rem",
    width: "300px",
    height: "340px",
    margin: "10px",
    padding: "1rem",
    border: "1px solid #E9E9E9",
    boxShadow: "0px 2px 3px 0px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transform: isHovered ? hoverScale : notHover,
    transition: "0.4s ease",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const ImageStyle: React.CSSProperties = {
    borderRadius: ".5rem",
  };

  const CardAlignment: React.CSSProperties = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    gap: ".8rem",
  };

  const TextStyle: React.CSSProperties = {
    color: "black",
    margin: 0,
  };

  const BtnStyle: React.CSSProperties = {
    backgroundColor: "#FF7733",
    borderRadius: ".5rem",
    border: "none",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "0.1rem",
    height: "2rem",
    width: "5rem",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div
      style={CardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={CardAlignment}>
        <img src={CardImage} style={ImageStyle} alt="harry kane" />
        <button style={BtnStyle}>SPORT</button>
        <h3 style={TextStyle}>
          Harry Kane með sturlað mark fyrir aftan miðju gegn Darmstadt
        </h3>
      </div>
    </div>
  );
};

export default Card;

//className="hover-card"
