import { productActions } from "./newProductReducer";

const getProducts = (searchQuery) => {
    return async (dispatch, getState) => {
        dispatch(productActions.getAllProducts({data: "hello"}));
    }
} 