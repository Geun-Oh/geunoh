import { createSlice, PayloadAction } from '@reduxjs/toolkit'; // reducer 생성을 도와줌. name, initialState, reducers 라는 세 가지 속성이 꼭 필요함.

const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS" as const;
const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS" as const;

type ActionType = typeof GET_PRODUCT_SUCCESS | typeof GET_SINGLE_PRODUCT_SUCCESS;

interface PayloadProps {
    data: any;
}

interface ActionProps {
    type: ActionType;
    payload: PayloadProps; //바꾸고자 하는 데이터의 형태를 타입으로 지정해주자.
}

interface StateProps {
    productList: unknown[];
    selectedItem: unknown | null;
}

let initialState: StateProps = {
    productList: [],
    selectedItem: null,
};

// const productReducer = (state: StateProps = initialState, action: ActionProps) => {
//     let { type, payload } = action;
//     switch(type) {
//         case GET_PRODUCT_SUCCESS:
//             return { ...state, producList: payload.data };
//         case GET_SINGLE_PRODUCT_SUCCESS:
//             return { ...state, selectedItem: payload.data };
//         default: 
//             return { ...state };
//     }
// }

// export default productReducer;

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getAllProducts(state: StateProps, action: PayloadAction<PayloadProps>) {
            state.productList = action.payload.data;
        },
        getSingleProduct(state: StateProps, action: PayloadAction<PayloadProps>) {
            state.selectedItem = action.payload.data;
        }
    }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;