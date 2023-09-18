import { createSlice} from '@reduxjs/toolkit';
import fetchAuth from "../thunk/fetchAuth.ts";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auths: [],
    },
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload
        }
    }
});
export const selectIsAuth = (state) => Boolean(state.auth.data)

export default authSlice.reducer;

export const {logout} = authSlice.actions
