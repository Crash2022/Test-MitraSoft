import {appSetErrorAC, appSetLocalStatusAC, appSetStatusAC} from './app-reducer';
import {call, put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {CommentType} from '../shared/types/types';
import {mitraSoftAPI} from '../shared/api/api';

// reducer
export type CommentsInitialStateType = {
    [postId: number]: CommentType[]
}

const initialState: CommentsInitialStateType = {}

export const commentsReducer = (state: CommentsInitialStateType = initialState,
                                 action: CommentsActionTypes): CommentsInitialStateType => {
    switch (action.type) {
        case 'COMMENTS/SET_POST_COMMENTS': {
            const copyState = {...state}
            copyState[action.postId] = action.comments
            return copyState
        }
        default:
            return state
    }
}

/*-----------------------------------------------------------------------------------*/

// actions
export type CommentsActionTypes = SetPostCommentsACType

export type SetPostCommentsACType = ReturnType<typeof setPostCommentsAC>
export const setPostCommentsAC = (postId: number, comments: CommentType[]) => ({
    type: 'COMMENTS/SET_POST_COMMENTS', postId, comments
} as const)

/*-----------------------------------------------------------------------------------*/

// react-redux-saga
export function* commentsWatcherSaga() {
    yield takeEvery('COMMENTS/GET_POST_COMMENTS', getPostCommentsTC_WorkerSaga)
}

// thunks
export const getPostCommentsTC = (postId: number) => ({type: 'COMMENTS/GET_POST_COMMENTS', postId} as const)
export function* getPostCommentsTC_WorkerSaga(action: ReturnType<typeof getPostCommentsTC>): any {
    yield put(appSetLocalStatusAC('loading'))
    const response: AxiosResponse<CommentType[]> = yield call(mitraSoftAPI.getPostComments, action.postId)
    try {
        yield put(setPostCommentsAC(action.postId, response.data))
        yield put(appSetLocalStatusAC('succeeded'))
    } catch (error) {
        console.log(error)
        yield put(appSetErrorAC('Some error occurred'))
        yield put(appSetLocalStatusAC('failed'))
    } finally {
        yield put(appSetLocalStatusAC('idle'))
    }
}