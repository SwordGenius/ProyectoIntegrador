import React from "react";
import Button from 'react-bootstrap/Button';
import '/Login.css';
import logo from '../Img/Logo.jpg';
import Linea from "./Linea";

function Login(){
    return(
        <div className="contenedor">
            <div className="imagen">
                <img id="logo" src={logo} alt=""/>
            </div>
            <Linea></Linea>
            <div className="inSesion">
                <h2>Iniciar sesión</h2>
            </div>
            <div className="imagenFondo">
                <input type="text" placeholder="Usuario"/>
                <br/>
                <input type="password" placeholder="Contraseña"/>
                <br/><br/>
                <Button style={{background: '#8FBBF6'}}>Ingresar</Button>{' '}
            </div>
        </div>
    );
}
export default Login