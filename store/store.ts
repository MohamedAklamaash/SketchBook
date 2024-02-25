import {configureStore,combineReducers} from "@reduxjs/toolkit";
import MenuReducers from "@/store/menuSlice";
import ToolBoxReducer from "@/store/toolBoxSlice";
export const store = configureStore({
    reducer:{
        menu:MenuReducers,
        toolbox:ToolBoxReducer
    }
})