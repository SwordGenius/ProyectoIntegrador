import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import TablaInventario from "../Components/TablaInventario";
import ModalAgregar from "../Components/ModalAgregar";
import ModalModificar from "../Components/ModalModificar";

export default function Inventario(){
    const [productos, setProductos] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [modificar, setModificar] = useState(false);
    const [productoModificar, setProductoModificar] = useState();

    const handleClose = () => {
        setIsModal(false);
    }
    const listarProductos = async () => {
        const response = await fetch("/api/productos/list")
        if (response.ok){
            const data = await response.json();
            setProductos(data);
        }
        else {
            console.log("No se pudo leer los datos")
        }
    }
    const agregarProducto = () =>{
        setIsModal(true);
        setModificar(false);
    }
    useEffect(() => {
        listarProductos();
    }, [productos])
    return(
        <Container className={"mt-5"}>
            <Row>
                <Col sm={"12"}>
                    <Card>
                        <CardHeader>
                            <h5>Inventario</h5>
                        </CardHeader>

                        <CardBody>
                            <Button size={"sm"} color={"success"} onClick={() => agregarProducto()}>Agregar</Button>
                            {productos.length >1 ? <TablaInventario data={productos}  />: console.log("Cargando")}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalAgregar
                isOpen={isModal}
                onClose={handleClose}
                modificar={modificar}
            />
        </Container>
    )
}