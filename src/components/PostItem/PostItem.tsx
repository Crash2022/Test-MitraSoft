import React from 'react';
import {Col, Row} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Card from 'react-bootstrap/Card';
import {CommentsAccordion} from '../CommentsAccordion/CommentsAccordion';
import Avatar from '../../shared/assets/avatar-04.svg';
import {PostType} from '../../shared/types/types';
import Tooltip from 'react-bootstrap/Tooltip';
import {useNavigate} from 'react-router-dom';

type PostItemProps = {
    post: PostType
    isTooltip: boolean
}

export const PostItem = ({post, isTooltip}: PostItemProps) => {

    const navigate = useNavigate()

    const renderTooltip = (props: any) => (
        <Tooltip id="user-image-tooltip" {...props}>
            Посмотреть профиль пользователя с id={post.userId}
        </Tooltip>
    )

    return (
        <>
            <Row key={post.id}
                 style={{
                     marginBottom: '15px', padding: '5px',
                     border: '1px solid black', borderRadius: '10px'
                 }}
            >
                <Col md={1}>
                    {
                        isTooltip ?
                            <OverlayTrigger
                                placement="right"
                                delay={{show: 150, hide: 200}}
                                overlay={renderTooltip}
                            >
                                <Card.Img src={Avatar}
                                          style={{cursor: 'pointer'}}
                                          onClick={() => {navigate(`/users/${post.userId}`)}}
                                />
                            </OverlayTrigger>
                            :
                            <Card.Img src={Avatar}
                                      onClick={() => {navigate(`/users/${post.userId}`)}}
                            />
                    }
                </Col>
                <Col md={11}>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <CommentsAccordion postId={post.id}/>
                </Col>
            </Row>
        </>
    )
}