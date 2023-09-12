import { RouterProvider } from "react-router-dom"
import router from "./router/router"

import { useDispatch } from "react-redux"

import { useEffect } from "react"
import axios from "axios"
import { user_token } from "./store/actions/userActions"



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let url = 'http://localhost:8000/api/auth/token'
    let token = localStorage.getItem('token')

    if(token){
      let configs = {headers:{'Authorization':`Bearer ${token}`}}
      axios.post(url, null, configs)
      .then(response => dispatch(user_token(response.data.user)))
      .catch(err => console.log(err))

    }
  }, [])

  return (

      <RouterProvider router={router} />

  )
}

export default App
