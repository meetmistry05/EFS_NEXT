//DEPENDENCIES
import { configureStore } from "@reduxjs/toolkit";

//REFERENCES
import rootReducer from "./redux/reducers/combine.reducers";

const initialState = {};

let store;

store = configureStore({
    reducer: rootReducer,
    initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

export default store;