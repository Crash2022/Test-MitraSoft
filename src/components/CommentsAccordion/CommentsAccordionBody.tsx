import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {ContextAwareToggle} from './ContextAwareToggle';

export const CommentsAccordionBody = () => {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey="0">Комментарии</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}