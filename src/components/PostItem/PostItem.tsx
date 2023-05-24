import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Card from 'react-bootstrap/Card';
import {CommentsAccordionBody} from '../CommentsAccordion/CommentsAccordionBody';
import Avatar from '../../shared/assets/avatar-04.svg';
import {CommentType, PostType} from '../../shared/types/types';
import Tooltip from 'react-bootstrap/Tooltip';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {getPostCommentsTC} from '../../store/comments-reducer';
import {useAppDispatch} from '../../shared/hooks/useAppDispatch';

type PostItemProps = {
    post: PostType
}

export const PostItem = ({post}: PostItemProps) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const commentsObj = useSelector<AppRootStateType, Array<CommentType>>(state => state.comments[post.id])

    const renderTooltip = (props: any) => (
        <Tooltip id="user-image-tooltip" {...props}>
            Посмотреть профиль пользователя
        </Tooltip>
    )

    useEffect(() => {
        dispatch(getPostCommentsTC(post.id))
    }, [])

    console.log('commentsObj', commentsObj)

    return (
        <>
            <Row key={post.id}
                 style={{
                     marginBottom: '15px', padding: '5px',
                     border: '1px solid black', borderRadius: '10px'
                 }}
            >
                <Col md={1}>
                    <OverlayTrigger
                        placement="right"
                        delay={{show: 150, hide: 200}}
                        overlay={renderTooltip}
                    >
                        <Card.Img src={Avatar}
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
                    {/*<CommentsAccordionBody comments={commentsObj}/>*/}

                    {
                        commentsObj.map(comment => {
                            return (
                                <CommentsAccordionBody key={comment.id} comment={comment}/>
                            )
                        })
                    }
                </Col>
            </Row>
        </>
    )
}

// export default {}
