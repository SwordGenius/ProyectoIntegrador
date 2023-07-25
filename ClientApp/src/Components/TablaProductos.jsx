import React from 'react';
import {Button, Table} from "reactstrap";
const TablaProductos = (props) => {
    const handleSave = (item) => {
        props.onAdd(item);
    };
    return (
        <Table striped responsive>
            <thead>
            <tr>
                <th>Código de producto</th>
                <th>Descripción</th>
                <th>Precio de compra</th>
                <th>Precio de venta</th>
                <th>Existencias</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                (props.data.length < 1)?
                    (console.log("No se encontro el producto")):
                    (props.data.map((item) => (
                        <tr key={item.codigoProducto}>
                            <th>{item.codigoProducto}</th>
                            <th>{item.descripcion}</th>
                            <th>{item.precioCompra}</th>
                            <th>{item.precioVenta}</th>
                            <th>{item.existencia}</th>
                            <td><Button color={"success"} size={"sm"} onClick={() => handleSave(item)}>Agregar</Button></td>
                        </tr>   
                    )))
            }
            </tbody>
        </Table>
    )
}
export  default TablaProductos;