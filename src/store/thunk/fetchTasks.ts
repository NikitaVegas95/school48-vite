import {createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "../../axios.ts";

export const fetchTasks:any = createAsyncThunk(
    '/tasks', async () => {
    try {
        const {data} = await axios.get('/tasks')
            return data
    } catch (err) {
        console.log(err)
    }
})

export default fetchTasks