import { createSlice} from '@reduxjs/toolkit';
import fetchAuth from "../thunk/fetchAuth.ts";

const authSlice:any = createSlice({
    name: 'auths',
    initialState: {
        auths: [
            {
                _doc: {
                    _id: null,
                    fullName: null,
                    email: null,
                }
            }
        ],
    },
    reducers: {
        logout: (state:any) => {
            state.authSlice = null;
        }
    },
    extraReducers: {
        [fetchAuth.fulfilled]: (state:any, action:any) => {
            state.data = action.payload
        }
    }
});
export const selectIsAuth = (state:any) => Boolean(state.authSlice.data)

export default authSlice.reducer;

export const {logout} = authSlice.actions
