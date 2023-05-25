import React from 'react';
import {CommentType} from '../../shared/types/types';
import Card from 'react-bootstrap/Card';

type CommentItemProps = {
    comment: CommentType
}

export const CommentItem = ({comment}: CommentItemProps) => {
    return (
        <div>
            <Card.Title>{comment.email}</Card.Title>
            <Card.Text>{comment.body}</Card.Text>
        </div>
    )
}