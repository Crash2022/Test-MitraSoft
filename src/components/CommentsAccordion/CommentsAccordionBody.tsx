import React, {useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {ContextAwareToggle} from './ContextAwareToggle';
import {CommentType} from '../../shared/types/types';
import {CommentItem} from '../CommentItem/CommentItem';

type CommentsAccordionBodyProps = {
    comments: CommentType[]
}

export const CommentsAccordionBody = ({comments}: CommentsAccordionBodyProps) => {

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

                        {
                            comments.map(com => {
                                return (
                                    <CommentItem key={com.id}
                                                 comment={com}
                                    />
                                )
                            })
                        }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}