import {configureStore} from '@reduxjs/toolkit';
import taskSlice from "./slices/tasks.ts";
import authSlice from "./slices/auth.ts";
import registrationSlice from "./slices/registration.ts"

const store = configureStore({
    reducer: {
        task: taskSlice,
        auth: authSlice,
        registration: registrationSlice,
    }
});
export default store
export type AppDispatch = typeof store.dispatch;
