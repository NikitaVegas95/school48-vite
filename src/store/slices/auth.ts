import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    getUser: {
        _id: null,
        token: null,
        email: null,
        fullName: null,
    }
};

const authSlice = createSlice({
    name: 'getUser',
    initialState,
    reducers: {
        setUser (state, action) {
            state._id = action.payload._id
            state.token = action.payload.token
            state.email = action.payload.email
            state.fullName = action.payload.fullName
        }
    },
});
export const stateUser = (state) => state

export default authSlice.reducer;
