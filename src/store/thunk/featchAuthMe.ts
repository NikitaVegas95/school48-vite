import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

const fetchAuthMe = createAsyncThunk('/fetchAuthMe', async () => {
    try {
        const {data} = await axios.get('/auth/me')
        return data
    } catch (err) {
        console.log(err)
    }
})

export default fetchAuthMe