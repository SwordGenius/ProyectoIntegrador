import React from "react";
import Linea from "/Linea";
import Nav from "./Nav";
import Box from '@mui/material/Box';
import '/Usuarios.css';

function Usuarios(){
    return(
        <div className="contenedor">
            <div>
            <Nav></Nav>
            </div>


            <div className="boxUser">
            <Box 
                sx={{
                
                width: 400,
                height: 400,
                border: .5
                }}>
                    <h2>Usuarios</h2>
                    <hr style={{background: 'black', height: '.2%'}}/>
            </Box>
                
            </div>
        </div>
    );
}

export default Usuarios