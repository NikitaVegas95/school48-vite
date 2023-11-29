import { createSlice} from '@reduxjs/toolkit';
import fetchRegistration from "./thunk.ts";

const initialState = {
    registration: []
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRegistration.fulfilled, (state, {payload}) => {
            state.data = payload
        })
    }
});
export default registrationSlice.reducer;