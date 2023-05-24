import React, {useEffect} from 'react';
import {PostType} from "../../shared/types/types";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectPosts} from "../../store/selectors";
import {getPostsTC} from "../../store/posts-reducer";
import {useNavigate} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Avatar from "../../shared/assets/avatar-04.svg";

export const Posts = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const posts = useAppSelector(selectPosts)

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (
        <div style={{marginTop: '40px'}}>
            {
                posts.map((post: PostType) => {
                    return (
                        <div key={post.id}>
                            <Card style={{width: '15rem'}}>
                                <Card.Body>
                                    <Card.Img variant="top" src={Avatar}/>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>
                                        {post.body}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}