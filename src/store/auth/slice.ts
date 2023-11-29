import { createSlice} from '@reduxjs/toolkit';
import thunk from "./thunk.ts";

const initialState = {
    auths: []
}

const authSlice = createSlice({
    name: 'auths',
    initialState,
    reducers: {
        logout: (state) => {
            state.authSlice = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(thunk.fulfilled, (state, action) => {
            state.data = action.email
        })
    }
});
export const selectIsAuth = (state) => Boolean(state.auth.data)
export default authSlice.reducer;
export const {logout} = authSlice.actions
