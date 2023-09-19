import { createSlice} from '@reduxjs/toolkit';
import fetchRegistration from "../thunk/featchRegistration.ts";

const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        registration: [],
    },
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchRegistration.fulfilled]: (state, action) => {
            state.data = action.payload
        }
    }
});
export const selectIsAuth = (state) => Boolean(state.auth.data)

export default registrationSlice.reducer;

export const {logout} = registrationSlice.actions
