import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import TablaVentas from "../Components/TablaVentas";



const Ventas = () => {
    const [productos, setProductos] = useState([]);
    const [isModal, setIsModal] = useState(false);

    const handleClose = () => {
        setIsModal(false);
    }
    const listarProductos = async () => {
        const response = await fetch("/api/productos/list")
        if (response.ok){
            const data = await response.json();
            setProductos(data);
            console.log(response);
        }
        else {
            console.log("No se pudo leer los datos")
        }
    }
    useEffect(() => {
        listarProductos();
    }, [])
    return (
        <Container className={"mt-5"}>
            <Row>
                <Col sm={"12"}>
                    <Card>
                        <CardHeader>
                            <h5>Productos</h5>
                        </CardHeader>
                        
                        <CardBody>
                            <Button size={"sm"} color={"success"} onClick={() => setIsModal(true)}>Agregar</Button>
                            {productos.length >1 ? <TablaVentas data={productos} lista={productos.length} toClose={handleClose} isModal={isModal} />: console.log("Cargando")}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </Container>  
    );
};

export default Ventas;
