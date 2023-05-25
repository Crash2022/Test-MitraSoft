import React, {useEffect, useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {ContextAwareToggle} from './ContextAwareToggle';
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CommentType} from "../../shared/types/types";
import {getPostCommentsTC} from "../../store/comments-reducer";
import {CommentItem} from "../CommentItem/CommentItem";
import {appSetStatusAC} from "../../store/app-reducer";
import {getPostsTC} from "../../store/posts-reducer";

type CommentsAccordionProps = {
    postId: number
}

export const CommentsAccordion = ({postId}: CommentsAccordionProps) => {

    const dispatch = useAppDispatch()
    const commentsObj = useSelector<AppRootStateType, Array<CommentType>>
        (state => state.comments[postId])

    const [defaultActiveKey, setDefaultActiveKey] = useState<string>('')
    // defaultActiveKey="0"

    useEffect(() => {
        if (defaultActiveKey === "0") {
            dispatch(getPostCommentsTC(postId))
        }
    }, [defaultActiveKey])

    return (
        <Accordion defaultActiveKey={defaultActiveKey}>
            <Accordion.Item eventKey="0" onClick={() => {setDefaultActiveKey('0')}}>
                <Accordion.Header onClick={() => {}}>
                    Показать комментарии...
                </Accordion.Header>
                <Accordion.Body>
                    {
                        commentsObj && commentsObj.map((com: CommentType) => {
                            return (
                                <CommentItem key={com.id}
                                             comment={com}
                                />
                            )
                        })
                    }

                    {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                    {/*eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad*/}
                    {/*minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
                    {/*aliquip ex ea commodo consequat. Duis aute irure dolor in*/}
                    {/*reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla*/}
                    {/*pariatur. Excepteur sint occaecat cupidatat non proident, sunt in*/}
                    {/*culpa qui officia deserunt mollit anim id est laborum.*/}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        // <Accordion>
        //     <Card>
        //         <Card.Header>
        //             <ContextAwareToggle eventKey='0'>
        //                 Комментарии...
        //             </ContextAwareToggle>
        //         </Card.Header>
        //         <Accordion.Collapse eventKey='0'>
        //             <Card.Body>
        //                 {/*{*/}
        //                 {/*    comments.map(com => {*/}
        //                 {/*        return (*/}
        //                 {/*            <CommentItem key={com.id}*/}
        //                 {/*                         comment={com}*/}
        //                 {/*            />*/}
        //                 {/*        )*/}
        //                 {/*    })*/}
        //                 {/*}*/}
        //             </Card.Body>
        //         </Accordion.Collapse>
        //     </Card>
        // </Accordion>
    )
}