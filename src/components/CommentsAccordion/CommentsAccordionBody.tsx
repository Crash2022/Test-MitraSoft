import React, {useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {ContextAwareToggle} from './ContextAwareToggle';
import {CommentType, PostType} from '../../shared/types/types';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {getPostCommentsTC} from "../../store/comments-reducer";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";

type CommentsAccordionBodyProps = {
    // comments: CommentType[]
    // comment: CommentType
    // post: PostType
    postId: number
}

export const CommentsAccordionBody = ({postId}: CommentsAccordionBodyProps) => {

    const dispatch = useAppDispatch()
    const commentsObj = useSelector<AppRootStateType, Array<CommentType>>(state => state.comments[postId])

    useEffect(() => {
        // dispatch(getPostCommentsTC(post.id))
    }, [])

    // console.log('comments', comments)

    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey="0">Комментарии...</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {/*Comments*/}

                        {
                            commentsObj && commentsObj.map((com: CommentType) => {
                                return (
                                    <div key={com.id}>
                                        <Card.Title>{com.email}</Card.Title>
                                        <Card.Text>{com.body}</Card.Text>
                                    </div>
                                )
                            })
                        }

                        {/*{*/}
                        {/*    comments && comments.map((com: any) => {*/}
                        {/*        return (*/}
                        {/*            <div>*/}
                        {/*                <Card.Title>{com.email}</Card.Title>*/}
                        {/*                <Card.Text>{com.body}</Card.Text>*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}

                        {/*{*/}
                        {/*    comments.map(com => {*/}
                        {/*        return (*/}
                        {/*            <CommentItem key={com.id}*/}
                        {/*                         comment={com}*/}
                        {/*            />*/}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}

                        {/*<Card.Title>{comment.email}</Card.Title>*/}
                        {/*<Card.Text>{comment.body}</Card.Text>*/}

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}