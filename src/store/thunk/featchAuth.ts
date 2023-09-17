import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

const fetchAuth = createAsyncThunk('/fetchAuth', async (getState) => {
    try {
        await axios.post('/', getState)
            .then((res) => {
                return res.data.token
            })
    } catch (err) {
        console.log(err)
    }
})

export default fetchAuth