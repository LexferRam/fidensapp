import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { TableMaster } from "./components/TableMaster";

import { DatosInputs } from "./components/DatosInputs";
import SimpleBackdrop from "./components/Backdrop";
import Dialog from "./components/Dialog";

export default function CollapsibleTable() {
  return (
    <>
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
    </>
  );
}
