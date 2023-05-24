import {appSetErrorAC, appSetStatusAC} from './app-reducer';
import {call, put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {PostType, UserType} from '../shared/types/types';
import {mitraSoftAPI} from '../shared/api/api';

// reducer
export type InitialStateType = {
    allPosts: PostType[]
    userProfile: UserType
    userPosts: PostType[]
}

const initialState: InitialStateType = {
    allPosts: [] as PostType[],
    userProfile: {} as UserType,
    userPosts: [] as PostType[]
}

export const postsReducer = (state: InitialStateType = initialState,
                                 action: PostsActionTypes): InitialStateType => {
    switch (action.type) {
        case 'POSTS/SET_POSTS': {
            return {...state, allPosts: action.posts}
        }
        case 'POSTS/SET_USER': {
            return {...state, userProfile: action.user}
        }
        case 'POSTS/SET_USER_POSTS': {
            return {...state, userPosts: action.posts}
        }
        default:
            return state
    }
}

/*-----------------------------------------------------------------------------------*/

// actions
export type PostsActionTypes = SetPostsACType | SetUserACType | SetUserPostsACType

export type SetPostsACType = ReturnType<typeof setPostsAC>
export const setPostsAC = (posts: Array<PostType>) => ({
    type: 'POSTS/SET_POSTS', posts
} as const)

export type SetUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (user: UserType) => ({
    type: 'POSTS/SET_USER', user
} as const)

export type SetUserPostsACType = ReturnType<typeof setUserPostsAC>
export const setUserPostsAC = (posts: PostType[]) => ({
    type: 'POSTS/SET_USER_POSTS', posts
} as const)

/*-----------------------------------------------------------------------------------*/

// react-redux-saga
export function* postsWatcherSaga() {
    yield takeEvery('POSTS/GET_POSTS', getPostsTC_WorkerSaga)
    yield takeEvery('POSTS/GET_USER', getUserTC_WorkerSaga)
}

// thunks
export const getPostsTC = () => ({type: 'POSTS/GET_POSTS'} as const)
export function* getPostsTC_WorkerSaga(action: ReturnType<typeof getPostsTC>): any {
    yield put(appSetStatusAC('loading'))
    const response: AxiosResponse<Array<PostType>> = yield call(mitraSoftAPI.getPosts)
    try {
        yield put(setPostsAC(response.data))
        yield put(appSetStatusAC('succeeded'))
    } catch (error) {
        console.log(error)
        yield put(appSetErrorAC('Some error occurred'))
        yield put(appSetStatusAC('failed'))
    } finally {
        yield put(appSetStatusAC('idle'))
    }
}

export const getUserTC = (userId: number) => ({type: 'POSTS/GET_USER', userId} as const)
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