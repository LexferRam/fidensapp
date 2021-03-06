import React, { useContext, useState, useEffect } from "react";
// import AuthContext from "../Context/AuthContext/AuthContext";
import Paper from "@material-ui/core/Paper";
import Logo from "../logo-fidens.png";
import { HttpsIcon, Visibility, VisibilityOff } from "@material-ui/icons";
import { Button, TextField,InputAdornment,IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// import Alert from "./Alerta";
import Fade from "@material-ui/core/Fade";
import { AuthContext } from "../auth/AuthContext";
import Alerta from "../components/Alerta";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    width: "100%",
  },
  text: {
    marginBottom: 25,
  },
  btn: {
    // marginBottom: 30,
    borderRadius: "50px !important",
  },
}));

const LoginPage = (props) => {
  const classes = useStyles();
  const { user, setUser, onSubmit, auth, open, setOpen, msn } = useContext(
    AuthContext
  );
  const [shown, setShown] = React.useState(false);

  const handleClickShowPassword = () => setShown(!shown);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  useEffect(() => {
    if (auth) {
      props.history.push("/");
    }
  }, [auth]);
  useEffect(() => {
    if (sessionStorage.getItem("AUTH")) {
      props.history.push("/");
    }
  }, []);

  return (
    <div className="fondo">
      <Alerta
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        msn={msn}
      />
      <Fade in={true} timeout={2000}>
        <div
          id="formLogin"
          style={{ display: "grid", placeItems: "center", marginTop: "9%" }}
        >
          <form
            onSubmit={onSubmit}
            noValidate
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "330px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "grid", placeItems: "center" }}>
                <img src={Logo} style={{ width: 140, marginTop: 10 }} />
              </div>
              <div style={{ marginTop: "35px", width: "100%" }}>
                <TextField
                  label="Nombre de Usuario"
                  type="text"
                  variant="outlined"
                  name="Cod_User"
                  onChange={onChange}
                  style={{ width: "100%" }}
                />
              </div>
              <div
                style={{ marginTop: "20px", marginBottom: 30, width: "100%" }}
              >
                <TextField
                  label="Contrase??a"
                  type={shown ? 'text' : 'password'}
                  variant="outlined"
                  name="Contrasena"
                  onChange={onChange}
                  style={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {shown ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  style={{
                    background: "#2980b9",
                    background:
                      "-webkit-linear-gradient(to right, #2980b9, #2c3e50)",
                    background: "linear-gradient(to right, #2980b9, #2c3e50)",
                    marginBottom: 30,
                    borderRadius: "50% !important",
                    width: "100%",
                  }}
                >
                  Ingresar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Fade>
    </div>
  );
};

export default LoginPage;
