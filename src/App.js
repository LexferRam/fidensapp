import React from "react";
<<<<<<< HEAD
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/AuthContext";
import { DataProvider } from "./context/DataProvider";
=======
import { Grid, Paper } from "@material-ui/core";
import { TableMaster } from "./components/TableMaster";
>>>>>>> main

import { DatosInputs } from "./components/DatosInputs";
import SimpleBackdrop from "./components/Backdrop";
import Dialog from "./components/Dialog";

export default function CollapsibleTable() {
  return (
    <>
<<<<<<< HEAD
      <AuthProvider>
        <DataProvider>
          <AppRouter />
        </DataProvider>
      </AuthProvider>,
=======
      <Dialog />
      <SimpleBackdrop />
      <Paper elevation={5} style={{ margin: 20, padding: 30 }}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12}>
            <DatosInputs />
          </Grid>

          <Grid item xs={12}>
            <TableMaster />
          </Grid>
        </Grid>
      </Paper>
>>>>>>> main
    </>
  );
}
