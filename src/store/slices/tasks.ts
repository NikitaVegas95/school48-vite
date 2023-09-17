import {createSlice} from "@reduxjs/toolkit";
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
            [fetchTasks.pending]: (state, action) => {
                console.log('Запрос')
            },
            [fetchTasks.fulfilled]: (state, action) => {
                state.tasks = action.payload
            },
            [fetchTasks.rejected]: (state, action) => {
                console.log("ошибка")
            }
        }

    }
);
export const { setTasks } = taskSlice.actions
export default taskSlice.reducer