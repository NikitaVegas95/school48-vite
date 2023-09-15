import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    task: {
        items: [],
        status: 'loading'
    },
}

const taskSlice = createSlice(
    {
        name: 'task',
        initialState,
        reducers: {},
    }
)

export const setTask = taskSlice.reducer