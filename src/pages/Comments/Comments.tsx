import React, {useEffect} from 'react';
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectAppStatus} from "../../store/selectors";
import {appSetStatusAC} from "../../store/app-reducer";
import Spinner from "react-bootstrap/Spinner";
import {getPostCommentsTC} from "../../store/comments-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CommentType} from "../../shared/types/types";

export const Comments = () => {

    const dispatch = useAppDispatch()
    const params = useParams<'postId'>()
    const status = useAppSelector(selectAppStatus)
    const commentsObj = useSelector<AppRootStateType, Array<CommentType>>(state => state.comments[Number(params.postId)])

    useEffect(() => {
        dispatch(appSetStatusAC('loading'))

        const timer = setTimeout(() => {
            dispatch(getPostCommentsTC(Number(params.postId)))
        }, 1000)

        return () => clearTimeout(timer)
    }, [params.postId])

    if (status === 'loading') return <Spinner animation="border" variant="primary" style={{marginTop: '300px'}}/>

    return (
        <div>
            <ul>
                {
                    commentsObj && commentsObj.map(com => {
                        return (
                            <li key={com.id}>{com.body}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}