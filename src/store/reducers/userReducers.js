import { createReducer } from "@reduxjs/toolkit";
import {  } from "../actions/userActions";
import { user_photo, user_login, user_token, user_logout, user_sign_up } from "../actions/userActions";

const initialState = {
    // text: 'un texto',
    // photo: ''
    user: null,
    token: null
}

const userReducer = createReducer(initialState,
    (builder) => builder
    .addCase(user_photo, (state, action) => {
        return{
            ...state,
            photo: action.payload.photo
        }
    })
    .addCase(user_login.fulfilled, (state, action) => {

        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
    })
    .addCase(user_token, (state, action) => {
        return{
            ...state,
            user: action.payload.user
        }
    })
    .addCase(user_logout, (state, action) => {
        return{
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
    })
    .addCase(user_sign_up.fulfilled, (state, action) => {
        return{
            ...state,
            user:action.payload
        }
    })
)

export default userReducer