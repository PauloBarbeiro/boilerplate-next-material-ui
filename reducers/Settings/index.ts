const initialState = {
    light: false,
    count: 0,
};

export default function reducer(state = initialState, action) {
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
            return state
    }
};
