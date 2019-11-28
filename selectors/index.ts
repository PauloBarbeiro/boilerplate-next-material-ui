import {IGlobalState} from "../typescript/Global";

export const selectLight = (state: IGlobalState) => state.light;

export const selectCount = (state: IGlobalState) => state.count;
