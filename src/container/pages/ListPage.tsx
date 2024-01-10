import React from "react";
import "../../App.css";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import SearchForm from "../../presentational/organisms/searchForm";
import ListItem from "../../presentational/organisms/listItem";
import HeaderButtons from "../../presentational/organisms/HeaderButtons";

function ListPage() {
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
          boxShadow: 3,
          width: "90%",
          height: "120px",
          marginTop: "50px",
          marginLeft: "5%",
          paddingTop: "60px",
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item className="SearchForm">
            <SearchForm
              onSearch={function (query: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          boxShadow: 3,
          width: "90%",
          height: "280px",
          justifyContent: "center",
          marginTop: "50px",
          marginLeft: "5%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ListItem />
          </Grid>
        </Grid>
      </Box>
      {/* <Box
        sx={{
          width: "90%",
          height: "100px",
          justifyContent: "center",
          marginTop: "5%",
          marginLeft: "5%",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <NewRegistrationButton to={"/RegistrationPage"} />
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
}

export default ListPage;
