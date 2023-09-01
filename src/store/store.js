import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducers'
import citieReducer from './reducers/citieReducers'
import itineraryReducer from './reducers/itineraryReducers'

export const store = configureStore({
    reducer: {
        userReducer,
        citieReducer,
        itineraryReducer
    }
})