import { createReducer } from "@reduxjs/toolkit";
import { get_itinerary } from "../actions/itineraryActions";

const initialState = {
    itineraries: []
}

const itineraryReducer = createReducer (initialState, 
    (builder) => { builder
        .addCase(get_itinerary.fulfilled, (state, action) => {
            return{
                ...state,
                itineraries: action.payload.itineraries
            }
        })
    })

export default itineraryReducer