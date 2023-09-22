import {configureStore} from '@reduxjs/toolkit';
import taskSlice from "./slices/tasks.ts";
import authSlice from "./slices/auth.ts";
import authSliceMe from "./slices/authMe.ts";
import registrationSlice from "./slices/registration.ts"

const store = configureStore({
    reducer: {
        taskSlice: taskSlice,
        authSlice: authSlice,
        authMeSlice: authSliceMe,
        registrationSlice: registrationSlice,
    }
});
export default store
export type AppDispatch = typeof store.dispatch;
