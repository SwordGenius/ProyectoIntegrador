import React from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import TablaProductos from "./TablaProductos";


export default function ModalProductos(props) {
    const handleClose = () => {
        props.onClose();
    };
    return (
        <Modal isOpen={props.isOpen} toggle={handleClose}>
          <ModalHeader toggle={handleClose}>
            Agregar producto
          </ModalHeader>
          <ModalBody>
            <TablaProductos data={props.data} onAdd={props.onAdd}/>
          </ModalBody>
        </Modal>
  );
}