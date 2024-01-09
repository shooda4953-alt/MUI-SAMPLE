import "../../App.css";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import HeaderButtons from "../../presentational/organisms/HeaderButtons";
import BackButtonButton from "../../presentational/molecules/backButton";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    // DETAIL ボタンがクリックされたときの処理
    navigate("/");
  };
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
        <Grid container>
          <Grid item xs={12}>
            <HeaderButtons />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 3,
          width: "80%",
          height: "480px",
          margin: "50px auto",
        }}
      >
        <Grid container item alignItems="center" justifyContent="center">
          <img
            src={process.env.PUBLIC_URL + "/LEGO.png"}
            alt="LEGO"
            style={{ maxWidth: "70%", maxHeight: "60%" }}
          />
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
            <BackButtonButton onClick={handleBackButtonClick} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DetailsPage;
