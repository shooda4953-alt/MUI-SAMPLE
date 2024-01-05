import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "text" | "outlined" | "contained";
}

const Button: React.FC<CustomButtonProps> = ({ label, onClick, variant }) => {
  return (
    <MuiButton variant={variant} onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;
