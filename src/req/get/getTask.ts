import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

const fetchTasks = createAsyncThunk('/tasks/fetchTasks', async (getState) => {
    try {
        await axios.get('/tasks')
            .then((res) => {
                getState(res.data)
            })
    } catch (err) {
        console.log(err)
    }

})

export default fetchTasks