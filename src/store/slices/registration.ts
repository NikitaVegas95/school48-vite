import { createSlice} from '@reduxjs/toolkit';
import fetchRegistration from "../thunk/featchRegistration.ts";

const registrationSlice:any = createSlice({
    name: 'registration',
    initialState: {
        registration: [],
    },
    reducers: {
        logout: (state:any) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchRegistration.fulfilled]: (state:any, action:any) => {
            state.data = action.payload
        }
    }
});
export default registrationSlice.reducer;

export const {logout} = registrationSlice.actions
