import React from "react";
import { Button, Grid, Stack } from "@mui/material";

interface ButtonListProps {
  buttonItems: { id: number; label: string }[];
}

export const ButtonList: React.FC<ButtonListProps> = ({ buttonItems }) => {
  return (
    <Grid
      container
      sx={{
        marginTop: "10px",
      }}
    >
      <Stack direction="row" spacing={3}>
        {buttonItems.map((item) => (
          <Grid item key={item.id}>
            <Button variant="contained" style={{ backgroundColor: "#c0c6c9" }}>
              {item.label}
            </Button>
          </Grid>
        ))}
      </Stack>
    </Grid>
  );
};
