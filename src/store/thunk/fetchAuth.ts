import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

const fetchAuth:any = createAsyncThunk('/fetchAuth', async (params:string) => {
    try {
        const {data} = await axios.post('/', params)
            return data
    } catch (err) {
        console.log(err)
    }
})

export default fetchAuth