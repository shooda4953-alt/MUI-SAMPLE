import React from "react";
import { Button, Grid } from "@mui/material";

interface HeaderButtonListProps {
  headerButton: { id: number; label: string }[];
}

export const HeaderButtonList: React.FC<HeaderButtonListProps> = ({
  headerButton,
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "10px",
      }}
    >
      {headerButton.map((item) => (
        <Grid item key={item.id}>
          <Button variant="text" style={{ color: "#333" }}>
            {item.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
