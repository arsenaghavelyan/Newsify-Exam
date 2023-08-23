import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout"
import Home from "../components/Home"
import Basket from "../components/Basket"

export default function Pages() {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout />,
            children:[
                {
                    path:"",
                    element:<Home />
                },
                {
                    path:"basket",
                    element:<Basket />
                }
            ]
        }
    ])
    return (
        <div> 
            <RouterProvider  router={router}/>
        </div>
    )
}
