import React, { useEffect, useContext } from "react";
import { Grid, Paper } from "@material-ui/core";

import SimpleBackdrop from "../components/Backdrop";
import { DatosInputs } from "../components/DatosInputs";
import ResponsiveDialog from "../components/Dialog";
import { TableMaster } from "../components/TableMaster";
import MenuAppBar from "../components/AppBar";
import { AuthContext } from "../auth/AuthContext";

export default function TblMasterPage(props) {
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    if (!sessionStorage.getItem("AUTH")) {
      props.history.push("/auth");
    }
  }, []);

  return (
    <>
      <ResponsiveDialog />
      <SimpleBackdrop />
      <MenuAppBar />
      <Paper elevation={5} style={{ margin: 20, padding: 30, marginTop: 40 }}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12}>
            <DatosInputs />
          </Grid>

          <Grid item xs={12}>
            <TableMaster />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
