import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.ts";

const authMeThunk = createAsyncThunk('/registration', async () => {
    try {
        const {data} = await axios.get('/auth/me')
        return data._doc
    } catch (err) {
        console.log(err)
    }
})

export default authMeThunk