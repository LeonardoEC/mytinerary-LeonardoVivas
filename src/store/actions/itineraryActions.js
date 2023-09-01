import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_itinerary = createAsyncThunk('get_itinerary', async(obj)=> {
    try{
        const response = await axios.get(`http://localhost:8000/api/itineraries?citiesId=${obj.id}`)
        console.log(response.data.itinerary)
        return{
            itineraries: response.data.itinerary
        }
    } catch(error){
        console.log(error)
        return{
            itineraries: []
        }
    }
})