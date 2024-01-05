import React from "react";
import Button from "../atoms/button";

interface NewRegistrationButtonProps {
  onClick: () => void;
}

const NewRegistrationButton: React.FC<NewRegistrationButtonProps> = ({
  onClick,
}) => {
  return <Button label="Sign up" onClick={onClick} variant="contained" />;
};

export default NewRegistrationButton;
