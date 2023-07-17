import      React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "../Templates/Error";
import Login from "../Templates/Login";

export default function LoginRoutes () {
    const router1 = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
            errorElement: <Error/>,
        },
    ])
    return(
        <RouterProvider router={router1}/>
    )
}