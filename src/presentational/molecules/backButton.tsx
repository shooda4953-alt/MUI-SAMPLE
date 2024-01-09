import React from "react";
import Button from "../atoms/button";

interface BackButtonButtonProps {
  onClick: () => void;
}

const BackButtonButton: React.FC<BackButtonButtonProps> = ({ onClick }) => {
  return <Button label="Back" onClick={onClick} variant="contained" />;
};

export default BackButtonButton;
