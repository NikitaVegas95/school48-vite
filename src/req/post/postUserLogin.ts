import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

const userLogin = createAsyncThunk('/tasks/fetchTasks', async (getState) => {
    try {
        await axios.post('/')
            .then((res) => {
                getState(res.data)
            })
    } catch (err) {
        console.log(err)
    }

})

export default userLogin