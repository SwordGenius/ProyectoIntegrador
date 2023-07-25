import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import './Form.css';
import {validarNum} from "./Validar";
import {Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";

const productoData = {
    codigoProducto: "",
    descripcion: "",
    precioCompra: 0,
    precioVenta: 0,
    existencia: 0,
    inventarioMin: 0,
    venta: []
}
function Formulario(props) {
    const [producto, setProducto] = useState(productoData);
    const onSubmit = (event) => {
        event.preventDefault();
        if (props.modificar === true){
            actualizarProducto();
        }
        else {
            agregarProducto();
        }
    }
    const agregarProducto = async () => {
        const response = await fetch("api/productos/post", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;chartset=utf-8'
            },
            body: JSON.stringify(producto)
        })
        if (response.ok){
            props.onClose();
        }
    }
    const actualizarProducto = async () => {
        const response = await fetch("api/productos/update/"+producto.codigoProducto ,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;chartset=utf-8'
                },
                body: JSON.stringify(producto)
        })
        if (response.ok){
        props.onClose();
        }
    }
    const validarPrecios = () => {
        return producto.precioCompra > producto.precioVenta;
    }
    useEffect(() => {
        if (props.modificar === true){
            setProducto(props.producto);
        }
    }, [])
    return (
        <div>
            <Form onSubmit={onSubmit}>
                {!props.modificar? <FormGroup>
                    <Label>Código de producto</Label>
                    <Input type={"text"}
                           name={"codigoProducto"}
                           onChange={(e) => setProducto({...producto, [e.target.name] : e.target.value})}
                           value={producto.codigoProducto}
                           required={!!producto.codigoProducto.value}
                    />
                </FormGroup> : null}
                <FormGroup>
                    <Label>Descripción</Label>
                    <Input type={"text"}
                           name={"descripcion"}
                           onChange={(e) => setProducto({...producto, [e.target.name] : e.target.value})}
                           value={producto.descripcion}
                           required={!!producto.descripcion.value}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Precio de compra</Label>
                    <Input type={"text"} 
                           name={"precioCompra"}
                           onChange={(e) => setProducto({...producto, [e.target.name] : parseFloat(e.target.value)? parseFloat(e.target.value) : 0})}
                           value={producto.precioCompra}
                           required={!!producto.precioCompra.value}
                           invalid={validarPrecios()}
                    />
                    <FormFeedback>
                        El precio de compra debe ser menor al precio de venta
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>Precio de venta</Label>
                    <Input type={"text"}
                           name={"precioVenta"}
                           onChange={(e) => setProducto({...producto, [e.target.name] : parseFloat(e.target.value)? parseFloat(e.target.value) : 0})}
                           value={producto.precioVenta}
                           required={!!producto.precioVenta.value}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Existencia</Label>
                    <Input type={"text"} 
                           name={"existencia"}
                           onChange={(e) => setProducto({...producto, [e.target.name] : parseInt(e.target.value)? parseInt(e.target.value) : 0})}
                           value={producto.existencia}
                           required={!!producto.existencia.value}
                    />

                </FormGroup>
                <FormGroup>
                    <Label>Inventario mínimo</Label>
                    <Input type={"text"} 
                           name={"inventarioMin"}
                           onChange={(e) => setProducto({...producto, [e.target.name] : parseInt(e.target.value)? parseInt(e.target.value) : 0})}
                           value={producto.inventarioMin}
                           required={!!producto.inventarioMin.value}
                    />
                </FormGroup>
                <Input className={"agregar"} type={"submit"} value={"Guardar"}/>
            </Form>
        </div>
    )
}

export default Formulario;

