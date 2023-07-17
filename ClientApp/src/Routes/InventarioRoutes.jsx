import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "../Templates/Error";
import Inventario from "../Templates/Inventario";
import Formulario from "../Components/Formulario";

export default function InventarioRoutes () {
    const router2 = createBrowserRouter([
        {
            path:"/",
            element:<Formulario/>,
            errorElement: <Error/>,
        },
        {
            path:"/inventario",
            element:<Inventario/>,
            errorElement: <Error/>,
        },
    ])
    return(
       <RouterProvider router={router2}/>
    )
}