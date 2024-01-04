import logo from "../../logo.svg";
import "../../App.css";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import { CheckBoxForm } from "../../presentational/molecules/numberCheckBox";
import { RadioForm } from "../../presentational/molecules/numberRadio";
import { TextFieldForm } from "../../presentational/molecules/numberTextFiled";
import { ButtonForm } from "../../presentational/molecules/numberButton";
import { HeaderButton } from "../../presentational/molecules/numberHeaderButton";
import { LoginButton } from "../../presentational/molecules/number LoginButton";

function App() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "90px",
          backgroundColor: "#c0c6c9",
          boxShadow: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={9}>
            <HeaderButton />
          </Grid>
          <Grid item xs={2}>
            <LoginButton />
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </Grid>
      </Grid>
      <Box
        sx={{
          boxShadow: 3,
          width: "90%",
          height: "280px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <p>checkBox(label):</p>
          </Grid>
          <Grid item xs={4}>
            <CheckBoxForm />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <p>radioButton(label):</p>
          </Grid>
          <Grid item xs={4}>
            <RadioForm />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <p>textField(label):</p>
          </Grid>
          <Grid item xs={4}>
            <TextFieldForm />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <ButtonForm />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
