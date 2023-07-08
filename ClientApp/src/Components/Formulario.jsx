import React, {useState} from "react";
import {useForm} from "react-hook-form";
import './Form.css';
import {validarNum} from "./Validar";

function Formulario(){
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [codigo, setCodigo] = useState();
    const [desc, setDesc] = useState();
    const [compra, setCompra] = useState();
    const [venta, setVenta] = useState();
    const [existencia, setExistencia] = useState();
    const [minimo, setMinimo] = useState();
    const onSubmit = (data) => {
        console.log(data);
    }
    const validarMayor = () => {
      return venta > compra;
    }
    return(
        <div>
            <h1>Agregar</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Código de producto</label>
                    <input type={"text"} {...register("codigo",{required: true})}
                           onChange={event => setCodigo(event.target.value)}/>

                </div>
                <div>
                    <label>Descripción</label>
                    <input type={"text"} {...register("desc",{required: true})}
                           onChange={event => setDesc(event.target.value)}/>

                </div>
                <div>
                    <label>Precio de compra</label>
                    <input type={"text"} {...register("compra",{required: true, validate: validarMayor})}
                           onChange={event => setCompra(parseFloat(event.target.value))}/>
                    {errors.compra && <p className={"errorPhrase"}>Precio de compra debe ser menor</p>}
                </div>
                <div>
                    <label>Precio de venta</label>
                    <input type={"text"} {...register("venta",{required: true, validate: validarMayor})}
                           onChange={event => setVenta(parseFloat(event.target.value))}/>
                    {errors.venta && <p className={"errorPhrase"}>Precio de venta debe ser mayor</p>}
                </div>
                <div>
                    <label>Existencia</label>
                    <input type={"text"} {...register("existencia",{required: true, validate: validarNum})}
                           onChange={event => setExistencia(parseInt(event.target.value))}/>

                    {errors.existencia && <p className={"errorPhrase"}>Ingrese un valor valido</p>}
                </div>
                <div>
                    <label>Inventario mínimo</label>
                    <input type={"text"} {...register("minimo",{required: true, validate: validarNum})}
                           onChange={event => setMinimo(parseInt(event.target.value))}/>
                    {errors.minimo && <p className={"errorPhrase"}>Ingrese un valor valido</p>}
                </div>
                <input type={"submit"} value={"Agregar"}/>
                {errors.codigo?.type === "required" && <p className={"errorPhrase"}>El campo código es obligatiorio</p>}
                {errors.desc?.type === "required" && <p className={"errorPhrase"}>El campo descripción es obligatiorio</p>}
                {errors.compra?.type === "required" && <p className={"errorPhrase"}>El campo precio de compra es obligatiorio</p>}
                {errors.venta?.type === "required" && <p className={"errorPhrase"}>El campo precio de venta es obligatiorio</p>}
                {errors.existencia?.type === "required" && <p className={"errorPhrase"}>El campo existencia es obligatiorio</p>}
                {errors.minimo?.type === "required" && <p className={"errorPhrase"}>El campo inventario minimo es obligatiorio</p>}
            </form>
        </div>
    )
}

export default Formulario;

