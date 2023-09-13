import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:8000/api/auth/signin', obj.data)
        console.log(data)
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'SignIn Error',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Back'
        })
        return {
            user: null
        }
    }
})

export const user_photo = createAction(
    'user_phoro',
    (obj) => {

        console.log(obj.photo)
        return {
            payload: {
                photo: obj.photo
            }
        }
    }
)

export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})

export const user_logout = createAsyncThunk('user_logout', async () => {
    try {


        let url = 'http://localhost:8000/api/auth/signout'
        let token = localStorage.getItem('token')
        let configs = { headers: { 'Authorization': `Bearer ${token}` } }
        axios.post(url, null, configs)

        localStorage.removeItem('token');
        localStorage.removeItem('user');



        return {
            user: null,
            token: null
        }
    } catch (error) {
        console.log(error);
        return false;
    }
})

export const user_sign_up = createAsyncThunk('user_sign_up', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:8000/api/auth/signup', obj)
        console.log("funSignUp", data)

        Swal.fire({
            title: 'SignIn',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'ok'
        })

        return {
            user: data.response

        }
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'SignUp Error',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Back'
        })
    }
})

export const user_sign_in_g = createAsyncThunk('user_sign_in_g', async (obj) => {
    try {
        // const { data } = await axios.post('http://localhost:8000/api/auth/signin', obj.data)

        const data = obj.data.data
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        // Swal.fire({
        //     title: 'SignIn',
        //     text: data.message,
        //     icon: 'success',
        //     confirmButtonText: 'ok'
        // })

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error)
        return {
            user: null
        }
    }
})