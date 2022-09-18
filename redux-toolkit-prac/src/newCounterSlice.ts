import { createSlice, PayloadAction } from '@reduxjs/toolkit'; // reducer 생성을 도와줌. name, initialState, reducers 라는 세 가지 속성이 꼭 필요함.

interface PayloadProps {
    data: any;
}

interface StateProps {
    value: number;
}

let initialState: StateProps = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: StateProps) => {
            state.value += 1;
        },
        decrement: (state: StateProps) => {
            state.value -= 1;
        },
        incrementByAmount: (state: StateProps, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;