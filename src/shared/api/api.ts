import axios, {AxiosResponse} from 'axios';
import {CommentType, PostType, UserType} from '../types/types';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const mitraSoftAPI = {
    getPosts(): Promise<AxiosResponse<PostType[]>> {
        return (
            instance
                .get<PostType[]>('posts', {})
        )
    },
    getUser(userId: number): Promise<AxiosResponse<UserType>> {
        return (
            instance
                .get<UserType>(`users/${userId}`, {})
        )
    },
    getPostComments(postId: number): Promise<AxiosResponse<CommentType[]>> {
        return (
            instance
                .get<CommentType[]>(`posts/${postId}/comments`, {})
        )
    },
    getPostCommentsByParams(postId: number): Promise<AxiosResponse<CommentType[]>> {
        return (
            instance
                .get<CommentType[]>(`comments?postId=${postId}`, {})
        )
    }
}