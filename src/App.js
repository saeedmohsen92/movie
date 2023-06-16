import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Card from './components/Card/Card'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout/Layout'
import Details from './components/Details/Details'
import Area from './components/Area/Area'
import Category from './components/Category/Category'
import Ingrediant from './components/Ingrediant/Ingrediant'
import Search from './components/Search/Search'
import AreaDetails from './components/AreaDetails/AreaDetails'
import CategoryDetails from './components/CategoryDetails/CategoryDetails'



export default function App() {



let routers = createBrowserRouter([


  {path:'/' , element:< Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'card', element:<Card/>},
    {path:'contactus', element:<Contact/>},
    {path:'area', element:<Area/>},
    {path:'category', element:<Category/>},
    {path:'ingrediant', element:<Ingrediant/>},
    {path:'search', element:<Search/>},
    {path:'areaDetails/:country', element:<AreaDetails/>},
    {path:'categoryDetails/:categoryMeal', element:<CategoryDetails/>},

    {path:'/:id', element:<Details/>}


  ]}
])

  return<>
  <RouterProvider router={routers}>

  </RouterProvider>
  </>
};
