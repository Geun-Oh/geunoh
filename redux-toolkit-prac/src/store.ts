import { configureStore } from "@reduxjs/toolkit";
import newProductReducer from "./newProductReducer";

const store = configureStore({
    reducer: {
        product: newProductReducer,
    }
})

export default store;