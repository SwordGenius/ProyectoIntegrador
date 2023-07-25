import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import logo from "../assets/logo.png";
import {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {Navigate} from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const usuariosRef = useRef([]);

  const onSubmit = () => {
    validarLogin()
  }
  const listarUsuarios = async () => {
    const response = await fetch("/api/usuarios/list")
    if (response.ok){
      return await response.json();
    }
    else {
      console.log("No se pudo leer los datos")
    }
    return null;
  }

  const validarLogin = () => {
    console.log(usuariosRef.current);
    for (const unUsuario of usuariosRef.current) {
      if (unUsuario.usuario === user && unUsuario.contrasena === password){
        if (unUsuario.administrador === 1){
          window.location.href="/administracion";
        }
        else{
          window.location.href="/ventas";
        }
      }
    }
  }
  useEffect(() => {
    listarUsuarios().then((datos) => {
      usuariosRef.current = datos;
    })
  },[]);

  return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
              sx={{
                marginTop: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
          >
            <img id="logo" src={logo} alt="" className="logo"/>

            <Typography component="h1" variant="h5">
              Iniciar sesión
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(validarLogin)}
                noValidate
                sx={{ mt: 1 }}
            >
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="usuario"
                  label="Usuario"
                  name="user"
                  autoComplete="user"
                  autoFocus
                  {...register("user", {required: true})}
                  onChange={event => setUser(event.target.value)}
                  value={user}
              />
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password", {required: true})}
                  onChange={event => setPassword(event.target.value)}
                  value={password}
              />

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={validarLogin}
              >
                Ingresar
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
  );
}
