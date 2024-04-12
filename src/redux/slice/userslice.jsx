import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user",
    initialState:{
        cardetails:{}
    },
    reducers:{
        addcardetails:(state,{payload})=>{
            console.log("ddddddd",payload);
            state.cardetails = payload.data
        }
    }
})


export const {addcardetails} = UserSlice.actions;
export const usercarselector = (state)=>state.user;
export const userReducer = UserSlice.reducer;
