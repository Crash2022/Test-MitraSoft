import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {PostsActionTypes, postsReducer, postsWatcherSaga} from './posts-reducer';
import {ApplicationActionTypes, appReducer} from './app-reducer';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

/*------------------------------------------------------------*/

// для React Redux DevTools Chrome
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// для React Redux DevTools Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// добавляем composeEnhancers() для React Redux DevTools Chrome
// export const store = createStore(rootReducer, composeEnhancers());

/*------------------------------------------------------------*/

const rootReducer = combineReducers({
    app: appReducer,
    posts: postsReducer
    // user: userReducer
})

const sagaMiddleware = createSagaMiddleware()

// @ts-ignore // для Chrome Extension
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware)))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, any>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

export type AppActionType =
    ApplicationActionTypes |
    PostsActionTypes
    // UserActionTypes

// saga
sagaMiddleware.run(rootWatcher)

function* rootWatcher() {
    yield all([
        postsWatcherSaga()
        // userWatcherSaga()
    ])
}
/*------------------------------------------------------------*/

// @ts-ignore
window.store = store;