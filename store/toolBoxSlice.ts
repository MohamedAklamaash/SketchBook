import { colors } from "@/constants/colorsConstant";
import { MenuItems } from "@/constants/menuConstants";
import { MenuActionsType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:MenuActionsType = {
    [MenuItems.PENCIL]: {
        color: colors.Black,
        size: 3
    },
    [MenuItems.ERASER]: {
        color: colors.White,
        size: 3
    },
    [MenuItems.UNDO]: {},
    [MenuItems.REDO]: {},
    [MenuItems.DOWNLOAD]: {},
};

const toolBoxSlice = createSlice({
    name: 'toolbox',
    initialState,
    reducers: {
        setChangeColor: (state, action) => {
            state[action.payload.item].color = action.payload.color;
        },
        setBrushSize: (state, action) => {
            state[action.payload.item].size = action.payload.brushSize;
        }
    }
})

export const { setBrushSize, setChangeColor } = toolBoxSlice.actions;
export default toolBoxSlice.reducer;