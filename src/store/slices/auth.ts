import { createSlice} from '@reduxjs/toolkit';
import fetchAuth from "../thunk/fetchAuth.ts";

const authSlice:any = createSlice({
    name: 'auth',
    initialState: {
        auths: [],
    },
    reducers: {
        logout: (state:any) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchAuth.fulfilled]: (state:any, action:any) => {
            state.data = action.payload
        }
    }
});
export const selectIsAuth = (state:any) => Boolean(state.auth.data)

export default authSlice.reducer;

export const {logout} = authSlice.actions
