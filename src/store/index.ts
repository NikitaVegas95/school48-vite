import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import {setTask} from "./slices/taskSlice.ts";

export const store = configureStore({
    reducer: {
        task: setTask,
        user: userReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
