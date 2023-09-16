import {configureStore} from '@reduxjs/toolkit';
import taskSlice from "./slices/tasks.ts";
import userSlice from "./slices/auth.ts";

export const store = configureStore({
    reducer: {
        task: taskSlice,
        user: userSlice,
    }
});

export type AppDispatch = typeof store.dispatch;
