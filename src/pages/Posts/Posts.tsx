import React, {useEffect} from 'react';
import {PostType} from "../../shared/types/types";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectPosts} from "../../store/selectors";
import {getPostsTC} from "../../store/posts-reducer";

export const Posts = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(selectPosts)

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (
        <div>
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