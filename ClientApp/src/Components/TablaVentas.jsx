import React, {useState} from 'react'
import {Button, Card, Col, Row, Table} from "reactstrap";
import ModalCantidad from "./ModalCantidad";
import ModalProductos from "./ModalProductos";


const productoData = {
    codigoProducto: "",
    descripcion: "",
    existencia: 0,
    inventarioMin: 0,
    precioCompra: 0,
    precioVenta: 0,
    venta: []
}
const ventaData = {
    folio: 0,
    codigoProducto: "",
    fechaVenta: "",
    cantidadVendida: 0
}
const TablaVentas = (props) => {
    const [editar, setEditar] = useState(1);
    const [indiceEditar, setIndiceEditar] = useState(0)
    const [cantidad, setCantidad] = useState(Array(props.lista).fill(1));
    const [isOpen, setIsOpen] = useState(false);
    const [carrito, setCarrito] = useState([productoData]);
    const [productoVender, setProductoVender] = useState(props.data);
    const [folio, setFolio] = useState(0);
    
    
    const handleEdit = (id) => {
        setIndiceEditar(id);
        setEditar(props.data[id]);
        setIsOpen(true);
    };
    const handleSave = (cantidadEditada) => {
        const nuevaCantidad = cantidad;
        nuevaCantidad[indiceEditar] = cantidadEditada;
        setCantidad(nuevaCantidad);
        setEditar(1);
        setIsOpen(false);
        setIndiceEditar(0)
    };
    const handleAdd = (producto) => {
        const nuevoCarrito = carrito;
        if (nuevoCarrito[0] === productoData)
            nuevoCarrito.pop()
        nuevoCarrito.push(producto);
        const nuevosProductos = productoVender.filter(item => item !== producto);
        setProductoVender(nuevosProductos)
        setCarrito(nuevoCarrito);
    }
    const handleRemove = (producto) => {
        const nuevoCarrito = carrito.filter(item => item !== producto)
        setCarrito(nuevoCarrito);
        const nuevosProductos = productoVender;
        nuevosProductos.push(producto);
        setProductoVender(nuevosProductos);
    }
    const handleClose = () => {
        setEditar(1);
        setIsOpen(false);
        setIndiceEditar(0)
    };
    const venderProductos = async () => {
        const venta = Array(carrito.length).fill(ventaData);
        setFolio(folio+1);
        const fecha = new Date();
        for (let i = 0; i < carrito.length; i++) {
            venta[i].codigoProducto = carrito[i].codigoProducto;
            venta[i].folio = folio;
            venta[i].fechaVenta = fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDate();
            venta[i].cantidadVendida = cantidad[i];
            console.log(venta[i])
            const response = await fetch("/api/Ventas/post", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;chartset=utf-8'
                },
                body: JSON.stringify(venta[i])
            })
            if (response.ok){
                console.log("subido")
            }
        }
        
    }
      return (
          <>
              <Table striped responsive>
              <thead>
              <tr>
                  <th>Código</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>    
                  <th></th>
              </tr>
              </thead>
              <tbody>
              {
                  (props.data.length < 1)? 
                      (console.log("No se encontro el producto")):
                      (carrito?.map((item, index) => (
                          item.codigoProducto?
                              <tr key={index}>
                                  <td>{item.codigoProducto}</td>
                                  <td>{item.descripcion}</td>
                                  <td>{item.precioVenta}</td>
                                  <td>{cantidad[index]}</td>
                                  <td>{(item.precioVenta)*cantidad[index]}</td>
                                  <td>
                                      <Button color={"primary"} size={"sm"} className={"me-5"} onClick={() => handleEdit(index)}>Editar</Button>
                                      <Button color={"danger"} size={"sm"} onClick={() => handleRemove(item)}>Quitar</Button>
                                  </td>
                              </tr> : console.log("No se pudo cargar el producto")
                      )))
              }
              </tbody>
              </Table>
              <Row>
                  <Col>
                      <Card>
                          <Button onClick={venderProductos}>Vender</Button>
                      </Card>
                  </Col>
              </Row>
            <ModalCantidad
                isOpen={isOpen}
                item={editar}   
                onSave={handleSave}
                onClose={handleClose}
                data={props.data}
            />
            <ModalProductos
                isOpen={props.isModal}
                onAdd={handleAdd}
                onClose={props.toClose}
                data={productoVender}
            />
          </>
      )
}
export  default TablaVentas;
