import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count:0,
}

const counterSlice = createSlice({
    'name':'counter',
    initialState,
    reducers:{
        increase:(state,action)=>{
            state.count += 1;
        },
        decrease:(state,action)=> {
            state.count -= 1;
        },
        reset:(state,action)=> {
            state.count = 0;
        },
        test:(state,action)=> {
            alert("THIS IS FROM DIFFERENT COMPONENT CALLED BY USING REDUX");
        }
    }
})
export const {increase,decrease,reset,test} = counterSlice.actions;
export default counterSlice.reducer;