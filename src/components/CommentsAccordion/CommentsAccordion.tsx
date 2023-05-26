import React, {useEffect, useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CommentType} from "../../shared/types/types";
import {getPostCommentsTC} from "../../store/comments-reducer";
import {CommentItem} from "../CommentItem/CommentItem";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectAppLocalStatus} from "../../store/selectors";
import Spinner from "react-bootstrap/Spinner";
import {Card} from 'react-bootstrap';
import {useAccordionButton} from "react-bootstrap/AccordionButton";

type CommentsAccordionProps = {
    postId: number
}

export const CommentsAccordion = ({postId}: CommentsAccordionProps) => {

    const dispatch = useAppDispatch()

    const localStatus = useAppSelector(selectAppLocalStatus)
    const commentsObj = useSelector<AppRootStateType, Array<CommentType>>
        (state => state.comments[postId])

    const [eventKey, setEventKey] = useState<string>('1')

    const decoratedOnClick = useAccordionButton(eventKey, () =>
        setEventKey(eventKey === '1' ? '0' : '1')
    )

    useEffect(() => {
        if (eventKey === '0') {
            dispatch(getPostCommentsTC(postId))
        }
    }, [eventKey])

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <button
                        type='button'
                        style={{ backgroundColor: eventKey === '0' ? 'pink' : 'lavender' }}
                        onClick={decoratedOnClick}
                    >
                        {eventKey === '1' ? 'Показать комментарии...' : 'Скрыть комментарии...'}
                    </button>
                </Card.Header>
                <Accordion.Collapse eventKey={eventKey!}>
                    <Card.Body>
                        {
                            eventKey === '0' ?
                            <div>
                                {
                                    localStatus === 'loading' ?
                                        <Spinner animation="border" variant="primary"
                                                 style={{
                                                     margin: '20px auto',
                                                     display: 'flex',
                                                     justifyContent: 'center'
                                                 }}
                                        />
                                        : commentsObj && commentsObj.map((com: CommentType) => {
                                        return (
                                            <CommentItem key={com.id}
                                                         comment={com}
                                            />
                                        )
                                    })
                                }
                            </div> : ''
                        }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}