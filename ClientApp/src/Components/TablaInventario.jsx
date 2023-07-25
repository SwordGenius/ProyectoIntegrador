import React, {useState} from 'react'
import {Button, Table} from "reactstrap";
import ModalModificar from "./ModalModificar";

const TablaInventario = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [productoModificar, setProductoModificar] = useState();
    const handleClose = () => {
        setIsOpen(false);
    };
    const modificarProducto = (producto) => {
        setIsOpen(true);
        setProductoModificar(producto)
    }
    const eliminarProducto = async (id) => {
        const response = await fetch("api/productos/delete/"+id, {
            method: "DELETE",
        })
        if (response.ok){
            console.log("eliminado")
        }
    }
    return(
        <>
            <Table striped responsive>
                <thead>
                <tr>
                    <th>Código del producto</th>
                    <th>Descripción</th>
                    <th>Precio de compra</th>
                    <th>Precio de venta</th>
                    <th>Existencia</th>
                    <th>Inventario Minimo</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    (props.data.length < 1)?
                        (console.log("No se encontro el producto")):
                        (props.data?.map((item, index) => (
                            item.codigoProducto?
                                <tr key={index}>
                                    <td>{item.codigoProducto}</td>
                                    <td>{item.descripcion}</td>
                                    <td>{item.precioCompra}</td>
                                    <td>{item.precioVenta}</td>
                                    <td>{item.existencia}</td>
                                    <td>{item.inventarioMin}</td>
                                    <td>
                                        <Button color={"primary"} size={"sm"} className={"me-5"} onClick={() => modificarProducto(item)}>Editar</Button>
                                        <Button color={"danger"} size={"sm"} onClick={() => eliminarProducto(item.codigoProducto)}>Quitar</Button>
                                    </td>
                                </tr> : console.log("No se pudo cargar el producto")
                        )))
                }
                </tbody>
            </Table>
            <ModalModificar
                isOpen={isOpen}
                onClose={handleClose}
                modificar={true}
                producto={productoModificar}
            />
        </>
    );
}

export default TablaInventario;