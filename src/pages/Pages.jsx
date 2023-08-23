import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout"
import Home from "../components/Home"
import Basket from "../components/Basket"
import Search from '../components/Search'

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
                    path:"search",
                    element:<Search />
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
