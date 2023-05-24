import React, {useEffect} from 'react';
import {PostType} from '../../shared/types/types';
import {useAppDispatch} from '../../shared/hooks/useAppDispatch';
import {useAppSelector} from '../../shared/hooks/useAppSelector';
import {selectAppStatus, selectPosts} from '../../store/selectors';
import {getPostsTC} from '../../store/posts-reducer';
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Avatar from '../../shared/assets/avatar-04.svg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Spinner from 'react-bootstrap/Spinner';

export const Posts = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const posts = useAppSelector(selectPosts)
    const status = useAppSelector(selectAppStatus)

    const renderTooltip = (props: any) => (
        <Tooltip id="user-image-tooltip" {...props}>
            Посмотреть профиль пользователя
        </Tooltip>
    )

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    if (status === 'loading') return <Spinner animation="border" variant="primary" style={{marginTop: '300px'}}/>

    return (
        <div>
            {
                posts.map((post: PostType) => {
                    return (
                        <div key={post.id}>
                            <Card style={{width: '15rem'}}>
                                <Card.Body>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{show: 250, hide: 400}}
                                        overlay={renderTooltip}
                                    >
                                        <Card.Img variant="top"
                                                  src={Avatar}
                                                  onClick={() => {
                                                      navigate(`/users/${post.userId}`)
                                                  }}
                                                  style={{cursor: 'pointer'}}
                                        />
                                    </OverlayTrigger>
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