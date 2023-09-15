import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "./../../axios.ts";


export const fetchTasks = createAsyncThunk('/tasks/fetchTasks', async () => {
    const {data} = await axios.get('/tasks')
    return data
})

const initialState = {
    task: {
        items: [],
        status: 'lading',
    },
    tags: {
        items: [],
        status: 'lading',
    }
}

const tagSlice = createSlice(
    {
        name: 'task',
        initialState,
        reducers: {},
    }
)

export const tasksReducer = tagSlice.reducer