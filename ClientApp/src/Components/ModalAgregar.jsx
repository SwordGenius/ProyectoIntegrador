import React from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import Formulario from "./Formulario";


export default function ModalAgregar(props) {
    const handleClose = () => {
        props.onClose();
    };
    return (
        <Modal isOpen={props.isOpen} toggle={handleClose}>
            <ModalHeader toggle={handleClose}>
                Agregar producto
            </ModalHeader>
            <ModalBody>
                <Formulario onClose={handleClose} modificar={props.modificar}/>
            </ModalBody>
        </Modal>
    );
}