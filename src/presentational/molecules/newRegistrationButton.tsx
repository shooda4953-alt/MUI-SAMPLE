import React from "react";
import Button from "../atoms/button";
import { useNavigate } from "react-router-dom";

interface NewRegistrationButtonProps {
  to: string;
}

const NewRegistrationButton: React.FC<NewRegistrationButtonProps> = ({
  to,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <Button label="Sign up" onClick={handleClick} variant="contained" />;
};

export default NewRegistrationButton;
