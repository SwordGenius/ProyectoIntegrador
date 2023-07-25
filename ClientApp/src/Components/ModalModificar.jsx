import {Modal, ModalBody, ModalHeader} from "reactstrap";
import Formulario from "./Formulario";
import React from "react";


export default function ModalModificar(props) {
    const handleClose = () => {
        props.onClose();
    };
    return (
        <Modal isOpen={props.isOpen} toggle={handleClose}>
            <ModalHeader toggle={handleClose}>
                Modificar producto
            </ModalHeader>
            <ModalBody>
                <Formulario onClose={handleClose} modificar={props.modificar} producto={props.producto}/>
            </ModalBody>
        </Modal>
    );
}