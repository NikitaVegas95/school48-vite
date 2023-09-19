import { createSlice} from '@reduxjs/toolkit';
import fetchAuthMe from "../thunk/fetchAuthMe.ts";

const authSlice:any = createSlice({
    name: 'auth',
    initialState: {
        auths: [],
    },
    reducers: {},
    extraReducers: {
        [fetchAuthMe.fulfilled]: (state:any, action:any) => {
            state.data = action.payload
        }
    }
});

export default authSlice.reducer;
