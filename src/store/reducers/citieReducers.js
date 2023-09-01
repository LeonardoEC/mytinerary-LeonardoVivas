import { createReducer } from "@reduxjs/toolkit";
import { filter_cities, get_cities, get_citiesById } from "../actions/citieActions";

const initialState = {
    cities: []
}


const citieReducer = createReducer(initialState, 
    (builder) =>{builder
        .addCase(get_cities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(filter_cities.fulfilled,(state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(get_citiesById.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
})



export default citieReducer