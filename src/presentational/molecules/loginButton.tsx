import React from "react";
import { Button, Grid } from "@mui/material";

interface LoginButtonListProps {
  loginButton: { id: number; label: string }[];
}

export const LoginButtonList: React.FC<LoginButtonListProps> = ({
  loginButton,
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "10px",
      }}
    >
      {loginButton.map((item) => (
        <Grid item key={item.id}>
          <Button variant="text" style={{ color: "#333" }}>
            {item.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
