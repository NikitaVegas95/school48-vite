import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

const fetchRegistration = createAsyncThunk('/fetchRegistration', async (params) => {
    try {
        const {data} = await axios.post('/registration', params)
        return data
    } catch (err) {
        console.log(err)
    }
})

export default fetchRegistration