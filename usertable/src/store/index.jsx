import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/Userslice";
import adminSlice from './slices/Adminslice'


const store = configureStore({
   reducer : {
    user : userSlice,
    admin : adminSlice
   }
})

export default store



