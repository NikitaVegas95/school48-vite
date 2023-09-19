import { createSlice} from "@reduxjs/toolkit";
import fetchTasks from "../thunk/fetchTasks.ts";

const taskSlice:any = createSlice(
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
            [fetchTasks.fulfilled]: (state:any, action:any) => {
                state.tasks = action.payload
            },
        }

    }
);
export default taskSlice.reducer