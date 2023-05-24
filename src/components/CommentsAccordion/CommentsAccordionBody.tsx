import React, {useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {ContextAwareToggle} from './ContextAwareToggle';
import {getPostCommentsTC} from '../../store/posts-reducer';
import {useAppDispatch} from '../../shared/hooks/useAppDispatch';
import {useAppSelector} from '../../shared/hooks/useAppSelector';
import {selectPostComments} from '../../store/selectors';

type CommentsAccordionBodyProps = {
    postId: number
}

export const CommentsAccordionBody = ({postId}: CommentsAccordionBodyProps) => {

    const dispatch = useAppDispatch()
    const comments = useAppSelector(selectPostComments)

    useEffect(() => {
        // dispatch(getPostCommentsTC(postId))
    }, [])

    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey="0">Комментарии</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {
                            comments && comments.map(com => {
                                return (
                                    <div>
                                        <Card.Title>{com.email}</Card.Title>
                                        <Card.Text>{com.body}</Card.Text>
                                    </div>
                                )
                            })
                        }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}