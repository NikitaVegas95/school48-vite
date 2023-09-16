import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

export const fetchTasks = createAsyncThunk('/tasks/fetchTasks', async (getState) => {
    try {
        await axios.get('/tasks')
            .then((res) => {
                getState(res.data)
            })
    } catch (err) {
        console.log(err)
    }

})

const initialState = {
    task: {
        items: [],
        status: 'loading'
    },
}

const tasks = createSlice(
    {
        name: 'task',
        initialState,
        reducers: {},
    }
)

export default tasks.reducer