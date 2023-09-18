import {createReducer, createSlice} from "@reduxjs/toolkit";
import fetchTasks from "../thunk/fetchTasks.ts";

const taskSlice = createSlice(
    {
        name: 'tasks',
        initialState: {
            tasks: [
                {
                    _id: null,
                    title: null,
                    text: null,
                }
            ]
        },
        reducers: {},
        extraReducers: {
            [fetchTasks.fulfilled]: (state, action) => {
                state.tasks = action.payload
            },
        }

    }
);
export default taskSlice.reducer