import { createSlice} from '@reduxjs/toolkit';

import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

export const fetchAuth = createAsyncThunk('/fetchAuth', async (getState) => {
    try {
        const {data} = await axios.post('/', getState)
            return data
    } catch (err) {
        console.log(err)
    }
})


const initialState = {
    user: {
        items: [],
        status: 'loading'
    },
};

const auth = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export default auth.reducer;
