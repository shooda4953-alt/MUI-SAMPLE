import logo from "../../logo.svg";
import "../../App.css";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import { HeaderButton } from "../../presentational/molecules/numberHeaderButton";
import BasicTable from "../../presentational/molecules/table";
import { SignUpButton } from "../../presentational/molecules/numberSignUpButton";

function SignUpPage() {
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
          <Grid item xs={2}></Grid>
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
          marginLeft: "5%",
        }}
      >
        <Grid container justifyContent="center" spacing={2}>
          <Grid item></Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          boxShadow: 3,
          width: "90%",
          height: "280px",
          justifyContent: "center",
          marginTop: "30px",
          marginLeft: "5%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BasicTable data={[]} />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "90%",
          height: "100px",
          justifyContent: "center",
          marginTop: "40px",
          marginLeft: "5%",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <SignUpButton />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default SignUpPage;
