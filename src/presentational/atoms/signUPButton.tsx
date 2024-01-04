import React from "react";
import { Button, Grid } from "@mui/material";

interface SignUpButtonListProps {
  signUpButton: { id: number; label: string }[];
}

export const SignUpButtonList: React.FC<SignUpButtonListProps> = ({
  signUpButton,
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "10px",
      }}
    >
      {signUpButton.map((item) => (
        <Grid item key={item.id}>
          <Button
            variant="contained"
            style={{ width: "100px", backgroundColor: "#c0c6c9" }}
          >
            {item.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
