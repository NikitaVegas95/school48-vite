import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

const fetchRegistration:any = createAsyncThunk('/fetchRegistration', async (params:any) => {
    try {
        const {data} = await axios.post('/registration', params)
        return data
    } catch (err) {
        console.log(err)
    }
})

export default fetchRegistration