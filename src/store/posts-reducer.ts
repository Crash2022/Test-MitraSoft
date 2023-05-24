import {appSetErrorAC, appSetStatusAC} from './app-reducer';
import {call, put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {CommentType, PostType, UserType} from '../shared/types/types';
import {mitraSoftAPI} from '../shared/api/api';

// reducer
export type InitialStateType = {
    allPosts: PostType[]
    userProfile: UserType
    userPosts: PostType[]
    // postComments: CommentType[]
    // [postId: number]: CommentType[]
}

const initialState: InitialStateType = {
    allPosts: [] as PostType[],
    userProfile: {} as UserType,
    userPosts: [] as PostType[],
    // postComments: [] as CommentType[],
    // [postId]: {}
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
            return {...state, userPosts: state.allPosts.filter(p => p.userId === action.userId)}
        }
        // case 'POSTS/SET_POST_COMMENTS': {
        //     return {...state, postComments: action.comments}
        // }
        default:
            return state
    }
}

/*-----------------------------------------------------------------------------------*/

// actions
export type PostsActionTypes =
    SetPostsACType | SetUserACType | SetUserPostsACType //| SetPostCommentsACType

export type SetPostsACType = ReturnType<typeof setPostsAC>
export const setPostsAC = (posts: Array<PostType>) => ({
    type: 'POSTS/SET_POSTS', posts
} as const)

export type SetUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (user: UserType) => ({
    type: 'POSTS/SET_USER', user
} as const)

export type SetUserPostsACType = ReturnType<typeof setUserPostsAC>
export const setUserPostsAC = (userId: number) => ({
    type: 'POSTS/SET_USER_POSTS', userId
} as const)

// export type SetPostCommentsACType = ReturnType<typeof setPostCommentsAC>
// export const setPostCommentsAC = (comments: CommentType[]) => ({
//     type: 'POSTS/SET_POST_COMMENTS', comments
// } as const)

/*-----------------------------------------------------------------------------------*/

// react-redux-saga
export function* postsWatcherSaga() {
    yield takeEvery('POSTS/GET_POSTS', getPostsTC_WorkerSaga)
    yield takeEvery('POSTS/GET_USER', getUserTC_WorkerSaga)
    // yield takeEvery('POSTS/GET_POST_COMMENTS', getPostCommentsTC_WorkerSaga)
}

// thunks
export const getPostsTC = () => ({type: 'POSTS/GET_POSTS'} as const)
export function* getPostsTC_WorkerSaga(action: ReturnType<typeof getPostsTC>): any {
    yield put(appSetStatusAC('loading'))
    const response: AxiosResponse<PostType[]> = yield call(mitraSoftAPI.getPosts)
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

// export const getPostCommentsTC = (postId: number) => ({type: 'POSTS/GET_POST_COMMENTS', postId} as const)
// export function* getPostCommentsTC_WorkerSaga(action: ReturnType<typeof getPostCommentsTC>): any {
//     yield put(appSetStatusAC('loading'))
//     const response: AxiosResponse<CommentType[]> = yield call(mitraSoftAPI.getPostComments, action.postId)
//     try {
//         yield put(setPostCommentsAC(response.data))
//         yield put(appSetStatusAC('succeeded'))
//     } catch (error) {
//         console.log(error)
//         yield put(appSetErrorAC('Some error occurred'))
//         yield put(appSetStatusAC('failed'))
//     } finally {
//         yield put(appSetStatusAC('idle'))
//     }
// }