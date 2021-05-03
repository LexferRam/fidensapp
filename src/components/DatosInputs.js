import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Paper } from "@material-ui/core";
import { DataContext } from "../context/DataProvider";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "V",
    label: "V",
  },
  {
    value: "E",
    label: "E",
  },
  {
    value: "J",
    label: "J",
  },
  {
    value: "P",
    label: "P",
  },
];

export const DatosInputs = () => {
  const { fetchInfo, setTipoID, tipoID } = useContext(DataContext);
  const [cedula, setCedula] = useState("");

  const handleChange = (event) => {
    setTipoID(event.target.value);
  };

  return (
    <Paper elevation={3} style={{ padding: 15 }}>
      <Grid container justify="flex-start" spacing={3}>
        <Grid item xs={2} md={2}>
          <TextField
            select
            value={tipoID}
            onChange={handleChange}
            helperText="Tipo de Identificación"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3} md={2}>
          <TextField
            id="standard-number"
            helperText="Número de identificación"
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
        </Grid>
        <Grid item xs={1} md={1}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            href="#outlined-buttons"
            onClick={() => {
              fetchInfo(tipoID, "FIDENS", cedula);
            }} //10495356
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
