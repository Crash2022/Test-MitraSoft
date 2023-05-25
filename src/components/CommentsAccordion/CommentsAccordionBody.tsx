import React, {useContext, useEffect, useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {ContextAwareToggle} from './ContextAwareToggle';
import {CommentType, PostType} from '../../shared/types/types';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {getPostCommentsTC} from "../../store/comments-reducer";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {AccordionContext} from 'react-bootstrap';

type CommentsAccordionBodyProps = {
    // comments: CommentType[]
    // comment: CommentType
    // post: PostType
    postId: number
}

export const CommentsAccordionBody = ({postId}: CommentsAccordionBodyProps) => {

    const dispatch = useAppDispatch()
    const commentsObj = useSelector<AppRootStateType, Array<CommentType>>
        (state => state.comments[postId])
    const [isFetch, setIsFetch] = useState<boolean>(false)

    // const { activeEventKey } = useContext(AccordionContext)
    // const eventKey = "0"
    // const isCurrentEventKey = activeEventKey === eventKey

    useEffect(() => {
        // dispatch(getPostCommentsTC(post.id))
    }, [])

    useEffect(() => {
        if (isFetch) {
            dispatch(getPostCommentsTC(postId))
            console.log('commentsObj', commentsObj)
        }
    }, [isFetch])

    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey='0'
                                        postId={postId}
                                        setIsFetch={setIsFetch}
                    >
                        Комментарии...
                    </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                    <Card.Body>
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