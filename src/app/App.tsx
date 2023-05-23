import './App.css';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../shared/hooks/useAppDispatch';
import { useAppSelector } from '../shared/hooks/useAppSelector';
import { getPostsTC } from '../store/posts-reducer';
import { selectPosts } from '../store/selectors';
import { PostType } from '../shared/types/types';

export const App = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(selectPosts)

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (
        <div className="App">
            {
                posts.map((p: PostType) => {
                    return (
                        <div key={p.id}>{p.title}</div>
                    )
                })
            }
        </div>
    )
}
