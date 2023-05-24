import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {mitraSoftAPI} from "../../shared/api/api";
import {PostType} from "../../shared/types/types";

export const Post = () => {

    const params = useParams<'postId'>()
    const [post, setPost] = useState<PostType>()

    useEffect(() => {
        mitraSoftAPI.getPost(Number(params.postId)).then((res) => {
            setPost(res.data)
        })
    }, [params.postId])

    return (
        <div>
            {
                post && (
                    <>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                    </>
                )
            }
        </div>
    )
}
