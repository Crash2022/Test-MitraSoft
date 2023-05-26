import {AppRootStateType} from './store';

export const selectAppStatus = (state: AppRootStateType) => state.app.status
export const selectAppLocalStatus = (state: AppRootStateType) => state.app.localStatus

export const selectPosts = (state: AppRootStateType) => state.posts.allPosts
export const selectUser = (state: AppRootStateType) => state.posts.userProfile
export const selectUserPosts = (state: AppRootStateType) => state.posts.userPosts