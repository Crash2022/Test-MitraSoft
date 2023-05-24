import {appSetErrorAC, appSetStatusAC} from './app-reducer';
import {call, put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {UserType} from '../shared/types/types';
import {mitraSoftAPI} from '../shared/api/api';

// reducer
const initialState: UserType = {} as UserType

export const userReducer = (state: UserType = initialState,
                                 action: UserActionTypes): UserType => {
    switch (action.type) {
        case 'USER/SET_USER': {
            return action.user
        }
        default:
            return state
    }
}

/*-----------------------------------------------------------------------------------*/

// actions
export type UserActionTypes = SetUserACType

export type SetUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (user: UserType) => ({
    type: 'USER/SET_USER', user
} as const)

/*-----------------------------------------------------------------------------------*/

// react-redux-saga
export function* userWatcherSaga() {
    yield takeEvery('USER/GET_USER', getUserTC_WorkerSaga)
}

export const getUserTC = (userId: number) => ({type: 'USER/GET_USER', userId} as const)
export function* getUserTC_WorkerSaga(action: ReturnType<typeof getUserTC>): any {
    yield put(appSetStatusAC('loading'))
    const response: AxiosResponse<UserType> = yield call(mitraSoftAPI.getUser, action.userId)
    try {
        yield put(setUserAC(response.data))
        yield put(appSetStatusAC('succeeded'))
    } catch (error) {
        console.log(error)
        yield put(appSetErrorAC('Some error occurred'))
        yield put(appSetStatusAC('failed'))
    } finally {
        yield put(appSetStatusAC('idle'))
    }
}