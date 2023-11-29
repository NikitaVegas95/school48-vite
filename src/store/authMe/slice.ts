import { createSlice} from '@reduxjs/toolkit';
import thunk from "./thunk.ts";

const initialState = {
    authMe: []
}

const authMeSlice = createSlice({
    name: 'authMe',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(thunk.fulfilled, (state, {payload}) => {
            state.authMe = payload
        })
    }
});
export default authMeSlice.reducer;

