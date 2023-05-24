import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {getUserTC} from "../../store/user-reducer";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectUser} from "../../store/selectors";

export const User = () => {

    const dispatch = useAppDispatch()
    const params = useParams<'userId'>()
    const user = useAppSelector(selectUser)

    useEffect(() => {
        dispatch(getUserTC(Number(params.userId)))
    }, [params.userId])

    return (
        <div>
            {
                user && (
                    <>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </>
                )
            }
        </div>
    )
}
