import { IGlobalState } from '../typescript/Global';

export const initialState: IGlobalState = {
    count: 0,
    light: false,
};

const GlobalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                light: !!action.light,
            };
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            };
        case 'RESET':
            return {
                ...state,
                count: initialState.count,
            };
        default:
            return state;
    }
};

export default GlobalReducer;