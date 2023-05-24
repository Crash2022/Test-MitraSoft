import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {ContextAwareToggle} from './ContextAwareToggle';
import {CommentType} from '../../shared/types/types';

type CommentsAccordionBodyProps = {
    // comments: CommentType[]
    comment: CommentType
}

export const CommentsAccordionBody = ({comment}: CommentsAccordionBodyProps) => {

    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey="0">Комментарии</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {/*Comments*/}

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

                        <Card.Title>{comment.email}</Card.Title>
                        <Card.Text>{comment.body}</Card.Text>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}