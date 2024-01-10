import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButtonButton from "../../presentational/molecules/backButton";
import HeaderButtons from "../../presentational/organisms/HeaderButtons";

const DetailsPage: React.FC = () => {
  const { state } = useLocation();

  const rowData = state.rowData;
  const navigate = useNavigate();

  if (!state || !state.rowData) {
    return <div>Error: Data not found</div>;
  }

  const handleBackButtonClick = () => {
    // back ボタンがクリックされたときの処理
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
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={6} textAlign="center">
            <p>商品名: {rowData.name}</p>
            <p>価格: {rowData.price}</p>
            <p>数量: {rowData.numberOfPrice}</p>
          </Grid>
          <Grid item xs={6}>
            <img
              src={process.env.PUBLIC_URL + "/LEGO.png"}
              alt="LEGO"
              style={{ maxWidth: "70%", maxHeight: "60%" }}
            />
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
            <BackButtonButton onClick={handleBackButtonClick} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DetailsPage;
