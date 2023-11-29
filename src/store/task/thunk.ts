import {createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "../../axios.ts";

export const taskThunk = createAsyncThunk(
    '/tasks/registration', async () => {
    try {
        const {data} = await axios.get('/tasks')
            return data
    } catch (err) {
        console.log(err)
    }
})

export default taskThunk