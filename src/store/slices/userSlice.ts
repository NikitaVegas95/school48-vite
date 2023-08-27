import { createSlice } from '@reduxjs/toolkit'
import {UserSlicesAction, UserSlicesState} from "../../interfaces/slice.ts";

const initialState:UserSlicesState = {
    email: null,
    token: null,
    id: null,
}

const userSlice= createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state:UserSlicesState, action:UserSlicesAction) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state:UserSlicesState) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer