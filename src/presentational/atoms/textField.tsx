import React from "react";
import { TextField as MuiTextField } from "@mui/material";

interface CustomTextFieldProps {
  label: string;
  onChange: (value: string) => void;
  variant?: "standard" | "outlined" | "filled";
}

const TextField: React.FC<CustomTextFieldProps> = ({
  label,
  onChange,
  variant,
}) => {
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <MuiTextField
        id={label}
        label={label}
        variant={variant}
        fullWidth
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextField;
