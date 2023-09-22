import { createSlice} from '@reduxjs/toolkit';
import fetchAuthMe from "../thunk/fetchAuthMe.ts";

const authSliceMe:any = createSlice({
    name: 'authMe',
    initialState: {
        authMe: [
            {
                _doc: {
                    _id: null,
                    fullName: null,
                    email: null,
                }
            }
        ]
    },
    reducers: {},
    extraReducers: {
        [fetchAuthMe.fulfilled]: (state:any, action:any) => {
            state.authMe = action.payload
        }
    }
});
export default authSliceMe.reducer;

