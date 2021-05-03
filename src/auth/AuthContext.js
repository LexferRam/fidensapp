import React, { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({ p_portal_username: "", p_pwd: "" });
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
  const [msn, setMsn] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://segurospiramide.com/asg-api/login",
        user
      );
      await sessionStorage.setItem("DATA_FIDENS", JSON.stringify(res.data));
      await sessionStorage.setItem("AUTH", JSON.stringify(true));
      await setAuth(true);
    } catch (error) {
      if (error.response) {
        if (error.response.status == 400) {
          setOpen(true);
          setMsn("Usuario o Contraseña incorrecta");
        } else {
          console.log(error);
        }
      } else if (error.request) {
        return error.request;
      } else {
        return error.message;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ msn, onSubmit, user, setUser, auth, setAuth, open, setOpen }}
    >
      {children}
    </AuthContext.Provider>
  );
};
