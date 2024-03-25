import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "@/redux/reducers/BookReducer";
export const store = configureStore({
    reducer: {
        BookReducer
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;