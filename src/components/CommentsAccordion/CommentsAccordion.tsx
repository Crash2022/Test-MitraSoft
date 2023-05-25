import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {ContextAwareToggle} from './ContextAwareToggle';
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";

type CommentsAccordionProps = {

}

export const CommentsAccordion = React.memo(() => {

    const dispatch = useAppDispatch()
    // const commentsObj = useSelector<AppRootStateType, Array<CommentType>>
    //     (state => state.comments[postId])

    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey='0'>
                        Комментарии...
                    </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                        Комментарии

                        {/*{*/}
                        {/*    comments.map(com => {*/}
                        {/*        return (*/}
                        {/*            <CommentItem key={com.id}*/}
                        {/*                         comment={com}*/}
                        {/*            />*/}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
})