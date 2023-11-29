import { createSlice} from "@reduxjs/toolkit";
import thunk from "./thunk.ts";

const initialState = {
    tasks: []
}

const taskSlice = createSlice(
    {
        name: 'tasks',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(thunk.fulfilled, (state, {payload}) => {
                state.tasks = payload
            });
        }
    }
);
export default taskSlice.reducer