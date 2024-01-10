import React, { useState, useEffect } from "react";
import BasicTable from "../molecules/table";
import Grid from "@mui/material/Grid";
import NewRegistrationButton from "../molecules/newRegistrationButton";

const ListItem: React.FC = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <BasicTable data={rows} />
      </Grid>
      <Grid item xs={12}>
        <NewRegistrationButton to={"/RegistrationPage"} />
      </Grid>
    </Grid>
  );
};

export default ListItem;
