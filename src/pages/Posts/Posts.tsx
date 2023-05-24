import React, {useEffect} from 'react';
import {PostType} from "../../shared/types/types";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectPosts} from "../../store/selectors";
import {getPostsTC} from "../../store/posts-reducer";
import {useNavigate} from "react-router-dom";

export const Posts = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const posts = useAppSelector(selectPosts)

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (
        <div>
            {
                posts.map((post: PostType) => {
                    return (
                        <div key={post.id}
                             onClick={() => {navigate(`/posts/${post.id}`)}}
                        >
                            {post.title}
                        </div>
                    )
                })
            }
        </div>
    )
}