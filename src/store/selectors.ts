import {AppRootStateType} from './store';
import { select } from 'redux-saga/effects';

export const selectAppStatus = (state: AppRootStateType) => state.app.status
export const selectAppError = (state: AppRootStateType) => state.app.error

export const selectPosts = (state: AppRootStateType) => state.posts.allPosts
export const selectUser = (state: AppRootStateType) => state.posts.userProfile
// export const selectUser = (state: AppRootStateType) => state.user.userProfile

// selector for saga
// export function* appSelect<TSelected>(selector: (state: AppRootStateType) => TSelected, ): Generator<any, TSelected, TSelected> {
//     return yield select(selector);
// }