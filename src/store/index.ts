import {configureStore} from '@reduxjs/toolkit';
import taskSlice from "./slices/tasks.ts";
import authSlice from "./slices/auth.ts";

const store = configureStore({
    reducer: {
        task: taskSlice,
        auth: authSlice,
    }
});
export default store
export type AppDispatch = typeof store.dispatch;
