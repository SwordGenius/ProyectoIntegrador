import React, {useEffect, useState} from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


export default function ModalCantidad(props) {
    const [cantidadEditar, setCantidadEditar] = useState(props.item)
    const handleSave = () => {
        props.onSave(cantidadEditar);
    };
    const handleClose = () => {
        props.onClose();
    };
    return (
        <Modal isOpen={props.isOpen} toggle={handleClose}>
            <ModalHeader toggle={handleClose} className={"align-content-center"}>Cantidad</ModalHeader>
            <ModalBody>
                <Input 
                    type={"number"}
                    onChange={e => setCantidadEditar( parseInt(e.target.value) || 0)}
                />
            </ModalBody>
            <ModalFooter>
                <Button color={"success"} onClick={handleSave}>Modificar</Button>
                <Button color={"danger"} onClick={handleClose}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    );
}
                