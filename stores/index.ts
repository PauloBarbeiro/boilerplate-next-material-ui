import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// Typescript
import {IGlobalState} from "../typescript/Global";

// Reducers
import reducer, { initialState } from '../reducers';

const sagaMiddleware = createSagaMiddleware<IGlobalState>();

export const initializeStore = (preloadedState: IGlobalState | undefined = initialState) => {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware),
        ),
    )
};

export { sagaMiddleware };