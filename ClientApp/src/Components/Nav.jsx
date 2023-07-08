import React from "react";
import Linea from "./Linea";
import logo from '../Img/Logo.jpg';
import Button from 'react-bootstrap/Button';
import '/Nav.css';

function Nav(){
    return(
        <div className="Contenedor"> 
            <div className="imagen">
                <img id="logo" src={logo} alt=""/>
                
                <Button id="btnV" style={{background: '#CCEDFC'}}>Ventas</Button>{' '}
                <Button id="btnI" style={{background: '#CCEDFC'}}>Inventario</Button>{' '}
                <Button id="btnC" style={{background: '#CCEDFC'}}>Corte</Button>{' '}
                <Button id="btnU" style={{background: '#CCEDFC'}}>Usuarios</Button>{' '}
                <span class="material-symbols-outlined" style={{marginLeft: '25%'}}>logout</span>

            </div>

            
            <Linea></Linea> 
        </div>
    );
}
export default Nav