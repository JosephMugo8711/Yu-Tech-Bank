import React from "react";

const Avatar = ({ size = "md" }) => {
  const avatarSizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  return (
    <img
      src="https://via.placeholder.com/150"
      alt="Profile"
      className={`rounded-full ${avatarSizes[size]}`}
    />
  );
};

export default Avatar;
