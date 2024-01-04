import React from "react";
import { TextField, Grid } from "@mui/material";

interface TextFieldListProps {
  textFieldItems: { id: number; label: string; value: string }[];
}

export const TextFieldList: React.FC<TextFieldListProps> = ({
  textFieldItems,
}) => {
  return (
    <Grid container spacing={2}>
      {textFieldItems.map((item) => (
        <Grid item key={item.id}>
          <TextField
            label={item.label}
            variant="outlined"
            value={item.value}
            fullWidth
          />
        </Grid>
      ))}
    </Grid>
  );
};
