import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {mitraSoftAPI} from "../../shared/api/api";
import {UserType} from "../../shared/types/types";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {getUserTC} from "../../store/user-reducer";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectUser} from "../../store/selectors";

export const User = () => {

    const dispatch = useAppDispatch()
    const params = useParams<'userId'>()
    const user = useAppSelector(selectUser)
    // const [user, setUser] = useState<UserType>()

    useEffect(() => {
        // mitraSoftAPI.getUser(Number(params.userId)).then((res) => {
        //     setUser(res.data)
        // })
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
