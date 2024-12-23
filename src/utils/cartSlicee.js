import { createSlice } from "@reduxjs/toolkit";


const cartSlicee=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
               state.items.push(action.payload); 
        },

        removeItem:(state,action)=>{
                state.items.pop();
        },

        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});
export const {addItem,removeItem,clearCart}=cartSlicee.actions

export default cartSlicee.reducer;