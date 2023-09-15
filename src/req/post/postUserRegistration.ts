import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

const userLogin = createAsyncThunk('/tasks/fetchTasks', async (getState) => {
    try {
        await axios.post('/registration')
            .then((req) => {
                getState(req)
            })
    } catch (err) {
        console.log(err)
    }

})

export default userLogin