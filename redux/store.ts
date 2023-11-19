import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice"
import registerReducer from "./features/registerSlice"

export const store = configureStore({
    reducer: {
        loginReducer,
        registerReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;