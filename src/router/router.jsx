import { createBrowserRouter } from 'react-router-dom'

import Main from '../layouts/Main'

import Home from '../pages/home/Home'
import Cities from '../pages/cities/Cities'
import CitieDetails from '../pages/citieDetails/CitieDetails'
import Errorpages from '../pages/ErrorPages/Errorpages'
import SignIn from '../pages/signIn/SignIn'
import SignUp from '../pages/signUp/SignUp'
import Login from '../pages/login/Login'
import ProtectedRoute from './ProtectedRoute'



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '*',
                element: <Errorpages />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />
            }, {
                path: '/cities/:id',
                element: <CitieDetails />
            }, {
                path: '/signIn',
                element: (
                    <ProtectedRoute path={'/'}>
                        <SignIn />
                    </ProtectedRoute>)
            }, {
                path: '/signUp',
                element: (<ProtectedRoute path={'/'}>
                    <SignUp />
                </ProtectedRoute>)
            }, {
                path: '/login',
                element: <Login />
            },
        ]
    }
])

export default router