import React from "react";
import { Button, Grid } from "@mui/material";

interface ButtonListProps {
  buttonItems: { id: number; label: string }[];
}

export const ButtonList: React.FC<ButtonListProps> = ({ buttonItems }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "10px",
      }}
    >
      {buttonItems.map((item) => (
        <Grid item key={item.id}>
          <Button variant="contained" style={{ backgroundColor: "#c0c6c9" }}>
            {item.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
