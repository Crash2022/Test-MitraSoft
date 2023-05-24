// import {appSetErrorAC, appSetStatusAC} from './app-reducer';
// import {call, put, takeEvery} from 'redux-saga/effects';
// import {AxiosResponse} from 'axios';
// import {PostType} from '../shared/types/types';
// import {mitraSoftAPI} from '../shared/api/api';
//
// // reducer
// const initialState: PostType = {} as PostType
//
// export const postReducer = (state: PostType = initialState,
//                                  action: PostActionTypes): PostType => {
//     switch (action.type) {
//         case 'POST/SET_POST': {
//             return action.post
//         }
//         default:
//             return state
//     }
// }
//
// /*-----------------------------------------------------------------------------------*/
//
// // actions
// export type PostActionTypes = SetPostACType
//
// export type SetPostACType = ReturnType<typeof setPostAC>
// export const setPostAC = (post: PostType) => ({
//     type: 'POST/SET_POST', post
// } as const)
//
// /*-----------------------------------------------------------------------------------*/
//
// // react-redux-saga
// export function* postWatcherSaga() {
//     yield takeEvery('POST/GET_POST', getPostTC_WorkerSaga)
// }
//
// export const getPostTC = () => ({type: 'POST/GET_POST'} as const)
// export function* getPostTC_WorkerSaga(action: ReturnType<typeof getPostTC>): any {
//     yield put(appSetStatusAC('loading'))
//     const response: AxiosResponse<PostType> = yield call(mitraSoftAPI.getPost)
//     try {
//         yield put(setPostAC(response.data))
//         yield put(appSetStatusAC('succeeded'))
//     } catch (error) {
//         console.log(error)
//         yield put(appSetErrorAC('Some error occurred'))
//         yield put(appSetStatusAC('failed'))
//     } finally {
//         yield put(appSetStatusAC('idle'))
//     }
// }

export default {}