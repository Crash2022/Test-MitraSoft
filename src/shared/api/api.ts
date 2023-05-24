import axios, {AxiosResponse} from 'axios';
import {PostType} from '../types/types';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const mitraSoftAPI = {
    getPosts(): Promise<AxiosResponse<Array<PostType>>> {
        return (
            instance
                .get<Array<PostType>>('posts?_limit=20', {})
        )
    },
    getPost(postId: number): Promise<AxiosResponse<PostType>> {
        return (
            instance
                .get<PostType>(`posts/${postId}`, {})
        )
    }
}