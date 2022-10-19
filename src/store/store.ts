import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/moviesSlice";

const store = configureStore({
    reducer: {
        movies: moviesSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;