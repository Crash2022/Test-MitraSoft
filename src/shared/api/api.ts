import axios, {AxiosResponse} from 'axios';
import {PostType, UserType} from '../types/types';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const mitraSoftAPI = {
    getPosts(): Promise<AxiosResponse<Array<PostType>>> {
        return (
            instance
                .get<Array<PostType>>('posts?_limit=30', {})
        )
    },
    getUser(userId: number): Promise<AxiosResponse<UserType>> {
        return (
            instance
                .get<UserType>(`users/${userId}`, {})
        )
    },
    // getPost(postId: number): Promise<AxiosResponse<PostType>> {
    //     return (
    //         instance
    //             .get<PostType>(`posts/${postId}`, {})
    //     )
    // }
}