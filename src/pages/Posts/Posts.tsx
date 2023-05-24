import React, {useEffect} from 'react';
import {PostType} from '../../shared/types/types';
import {useAppDispatch} from '../../shared/hooks/useAppDispatch';
import {useAppSelector} from '../../shared/hooks/useAppSelector';
import {selectAppStatus, selectPosts} from '../../store/selectors';
import {getPostsTC} from '../../store/posts-reducer';
import Spinner from 'react-bootstrap/Spinner';
import {Container} from 'react-bootstrap';
import {appSetStatusAC} from '../../store/app-reducer';
import {PostItem} from '../../components/PostItem/PostItem';

export const Posts = () => {

    const dispatch = useAppDispatch()
    const status = useAppSelector(selectAppStatus)
    const posts = useAppSelector(selectPosts)

    useEffect(() => {
        dispatch(appSetStatusAC('loading'))

        const timer = setTimeout(() => {
            dispatch(getPostsTC())
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    if (status === 'loading') return <Spinner animation="border" variant="primary" style={{marginTop: '300px'}}/>

    return (
        <Container>
            {
                posts.map((post: PostType) => {
                    return (
                        <div key={post.id}>
                            <PostItem post={post}/>
                        </div>
                    )
                })
            }
        </Container>
    )
}