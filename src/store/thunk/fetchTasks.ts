import {createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "../../axios.ts";

export const fetchTasks = createAsyncThunk('/tasks/fetchTasks', async (paramsparams) => {
    try {
        const {data} = await axios.get('/tasks')
            return data
    } catch (err) {
        console.log(err)
    }
})

export default fetchTasks