import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        username:"",
        userRole:"",
        isLoggedIn:false,
    },
    reducers:
    {
        loginAsDoctor:(state,action)=>{
            state.username=action.payload;
            state.userRole="doctor";
            state.isLoggedIn=true;
        },
        loginAsMedical:(state,action)=>{
            state.username=action.payload;
            state.userRole="medical";
            state.isLoggedIn=true;
        },
        logout:(state,action)=>{
            state.username="";
            state.userRole="";
            state.isLoggedIn=false;
        },

    },

});

export const {loginAsDoctor, loginAsMedical, logout}=userSlice.actions;

export default userSlice.reducer;