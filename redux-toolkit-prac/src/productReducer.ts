const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS" as const;
const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS" as const;

type ActionType = typeof GET_PRODUCT_SUCCESS | typeof GET_SINGLE_PRODUCT_SUCCESS;

interface ActionProps {
    type: ActionType;
    payload: any; //바꾸고자 하는 데이터의 형태를 타입으로 지정해주자.
}

interface StateProps {
    productList: unknown[];
    selectedItem: unknown | null;
}

let initialState: StateProps = {
    productList: [],
    selectedItem: null,
};

const productReducer = (state: StateProps = initialState, action: ActionProps) => {
    let { type, payload } = action;
    switch(type) {
        case GET_PRODUCT_SUCCESS:
            return { ...state, producList: payload.data };
        case GET_SINGLE_PRODUCT_SUCCESS:
            return { ...state, selectedItem: payload.data };
        default: 
            return { ...state };
    }
}

export default productReducer;