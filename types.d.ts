export type menuType = {
    activeMenuItem: string | null;
    actionMenuItem: null | string;
}

export interface MenuActionsType{
    [x: string]: {
        color: string;
        size: number;
    } | {
        color?: undefined;
        size?: undefined;
    };
}