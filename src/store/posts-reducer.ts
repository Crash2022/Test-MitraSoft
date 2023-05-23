import {appSetErrorAC, appSetStatusAC} from './app-reducer';
import {call, put, takeEvery} from 'redux-saga/effects';
import {AxiosError, AxiosResponse} from 'axios';
import {PostType} from '../shared/types/types';
import {handleServerNetworkErrorSaga} from '../shared/utils/errorUtils';
import {mitraSoftAPI} from '../shared/api/api';

// reducer
const initialState: Array<PostType> = []

export const postsReducer = (state: Array<PostType> = initialState,
                                 action: PostsActionTypes): Array<PostType> => {
    switch (action.type) {
        case 'POSTS/SET_POSTS': {
            return action.posts
        }
        default:
            return state
    }
}

/*-----------------------------------------------------------------------------------*/

// actions
export type PostsActionTypes = SetPostsACType

export type SetPostsACType = ReturnType<typeof setPostsAC>
export const setPostsAC = (posts: Array<PostType>) => ({
    type: 'POSTS/SET_POSTS', posts
} as const)

/*-----------------------------------------------------------------------------------*/

// react-redux-saga
export function* postsWatcherSaga() {
    yield takeEvery('POSTS/GET_POSTS', getPostsTC_WorkerSaga)
}

export const getPostsTC = () => ({type: 'POSTS/GET_POSTS'} as const)
export function* getPostsTC_WorkerSaga(action: ReturnType<typeof getPostsTC>): any {
    yield put(appSetStatusAC('loading'))
    const response: AxiosResponse<Array<PostType>> = yield call(mitraSoftAPI.getPosts)
    try {
        yield put(setPostsAC(response.data))
        yield put(appSetStatusAC('succeeded'))
    } catch (error) {
        console.log(error)
        // yield* handleServerNetworkErrorSaga(error as AxiosError)
    }
}