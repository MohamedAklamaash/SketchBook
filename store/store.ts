import {configureStore,combineReducers} from "@reduxjs/toolkit";
import MenuReducers from "@/store/menuSlice";
export const store = configureStore({
    reducer:{
        menu:MenuReducers
    }
})