import { configureStore } from "@reduxjs/toolkit";
import trackSlice from "./trackSlice";

export const store = configureStore({
    reducer: {
        track: trackSlice
    }
})