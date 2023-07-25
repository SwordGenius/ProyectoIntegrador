import      React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "../Templates/Error";
import Login from "../Templates/Login";
import Administracion from "../Templates/Administracion";
import Ventas from "../Templates/Ventas";
import Inventario from "../Templates/Inventario";

export default function LoginRoutes () {
    const router1 = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
            errorElement: <Error/>,
        },
        {
            path:"/ventas",
            element:<Ventas/>,
            errorElement: <Error/>,
        },
        {
            path:"/administracion",
            element:<Administracion/>
        },
        {
            path:"/inventario",
            element:<Inventario/>
        }
    ])
    return(
        <RouterProvider router={router1}/>
    )
}