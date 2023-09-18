import { createSlice} from '@reduxjs/toolkit';
import fetchAuthMe from "../thunk/featchAuthMe.ts";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auths: [],
    },
    reducers: {},
    extraReducers: {
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.data = action.payload
        }
    }
});

export default authSlice.reducer;
