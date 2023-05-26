import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Card from 'react-bootstrap/Card';
import {CommentsAccordion} from '../CommentsAccordion/CommentsAccordion';
import Avatar from '../../shared/assets/avatar-04.svg';
import {CommentType, PostType} from '../../shared/types/types';
import Tooltip from 'react-bootstrap/Tooltip';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {useAppDispatch} from '../../shared/hooks/useAppDispatch';
import {getPostCommentsTC} from "../../store/comments-reducer";
import {CommentItem} from "../CommentItem/CommentItem";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectAppLocalStatus} from "../../store/selectors";
import Spinner from "react-bootstrap/Spinner";

type PostItemProps = {
    post: PostType
    isTooltip: boolean
}

export const PostItem = ({post, isTooltip}: PostItemProps) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const localStatus = useAppSelector(selectAppLocalStatus)
    const commentsObj = useSelector<AppRootStateType, Array<CommentType>>
        (state => state.comments[post.id])

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    const renderTooltip = (props: any) => (
        <Tooltip id="user-image-tooltip" {...props}>
            Посмотреть профиль пользователя с id={post.userId}
        </Tooltip>
    )

    useEffect(() => {
        if (!isCollapsed) {
            dispatch(getPostCommentsTC(post.id))
        }
    }, [isCollapsed])

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
                                          onClick={() => {
                                              navigate(`/users/${post.userId}`)
                                          }}
                                />
                            </OverlayTrigger>
                            :
                            <Card.Img src={Avatar}
                                      onClick={() => {
                                          navigate(`/users/${post.userId}`)
                                      }}
                            />
                    }

                </Col>
                <Col md={11}>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>

                    {/*<CommentsAccordion postId={post.id}/>*/}

                    {/*<button onClick={() => {navigate(`/posts/${post.id}/comments`)}}>*/}
                    {/*    Посмотреть комментарии*/}
                    {/*</button>*/}

                    <button onClick={() => {setIsCollapsed(!isCollapsed)}}>
                        Посмотреть комментарии...
                    </button>
                    {
                        !isCollapsed ?
                            <div>
                                {
                                    localStatus === 'loading' ?
                                        <Spinner animation="border" variant="primary"
                                                 style={{margin: '20px auto', display: 'flex', justifyContent: 'center'}}
                                        />
                                        : commentsObj && commentsObj.map((com: CommentType) => {
                                        return (
                                            <CommentItem key={com.id}
                                                         comment={com}
                                            />
                                        )
                                    })
                                }
                            </div>
                            : ''
                    }
                </Col>
            </Row>
        </>
    )
}