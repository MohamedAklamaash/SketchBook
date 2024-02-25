import { createSlice } from "@reduxjs/toolkit";
import { MenuItems } from "@/constants/menuConstants";
import { menuType } from "@/types";

const initialState:menuType = {
    activeMenuItem:MenuItems.PENCIL,
    actionMenuItem:null
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers:{
        setmenuItemClick:(state,action)=>{
            state.activeMenuItem = action.payload;
        },
        setactionItemsClick:(state,action)=>{
            state.actionMenuItem = action.payload;
        }
    }
});

export const {setmenuItemClick,setactionItemsClick} = menuSlice.actions;
export default menuSlice.reducer;