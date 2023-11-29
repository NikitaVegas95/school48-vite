import {configureStore} from '@reduxjs/toolkit';
import authSlice from "./auth/slice.ts";
import authMeSlice from "./authMe/slice.ts";
import registrationSlice from "./registration/slice.ts"
import taskSlice from "./task/slice.ts";

const store = configureStore({
    reducer: {
        task: taskSlice,
        auth: authSlice,
        authMe: authMeSlice,
        registration: registrationSlice,
    }
});

export default store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
