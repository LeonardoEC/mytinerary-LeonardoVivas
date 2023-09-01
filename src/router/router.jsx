import { createBrowserRouter } from 'react-router-dom'

import Main from '../layouts/Main'

import Home from '../pages/home/Home'
import Cities from '../pages/cities/Cities'
import CitieDetails from '../pages/citieDetails/CitieDetails'
import Login from '../pages/login/Login'
import Errorpages from '../pages/ErrorPages/Errorpages'



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '*',
                element: <Errorpages/>
            },
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/cities',
                element: <Cities/>
            },{
                path: '/cities/:id',
                element: <CitieDetails/>
            },{
                path: '/login',
                element: <Login/>
            },
        ]
    }
])

export default router