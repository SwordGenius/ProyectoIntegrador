import      React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "../Templates/Error";
import Inventario from "../Templates/Inventario";

export default function InventarioRoutes () {
    const router = createBrowserRouter([
        {
            path:"/inventario",
            element:<Inventario/>,
            errorElement: <Error/>,
        },
    ])
    return(
       <RouterProvider router={router}/>
    )
}