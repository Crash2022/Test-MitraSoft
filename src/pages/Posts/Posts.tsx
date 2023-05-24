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
import {Row, Col, Container} from 'react-bootstrap';

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
        <Container>
            {
                posts.map((post: PostType) => {
                    return (
                        <Row key={post.id} style={{marginBottom: '15px', border: '1px solid black', padding: '5px', borderRadius: '10px'}}>
                            <Col md={1}>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{show: 250, hide: 400}}
                                    overlay={renderTooltip}
                                >
                                    <Card.Img variant="top"
                                              src={Avatar}
                                              style={{cursor: 'pointer'}}
                                              onClick={() => {
                                                  navigate(`/users/${post.userId}`)
                                              }}
                                    />
                                </OverlayTrigger>
                            </Col>
                            <Col md={11}>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    )
}