import { createSlice } from "@reduxjs/toolkit";
import { clearAdmin } from "../actions";

const adminSlice = createSlice({
    name : 'admin',
    initialState : [],
    reducers : {
        addAdmin(state,action){
            state.push(action.payload)
        },
        removeAdmin(state,action){
            state.splice(action.payload,1)
        },
    },
    extraReducers(builder){
        builder.addCase(clearAdmin,()=>{
            return [];
        })
    }
})


export default adminSlice.reducer;

export const { addAdmin , removeAdmin } = adminSlice.actions;