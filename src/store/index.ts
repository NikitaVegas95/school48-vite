import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import {tasksReducer} from "./slices/taskSlice.ts";

export const store = configureStore({
    reducer: {
        task: tasksReducer,
        user: userReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
