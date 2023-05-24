import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {mitraSoftAPI} from "../../shared/api/api";
import {UserType} from "../../shared/types/types";

export const User = () => {

    const params = useParams<'userId'>()
    const [user, setUser] = useState<UserType>()

    useEffect(() => {
        mitraSoftAPI.getUser(Number(params.userId)).then((res) => {
            setUser(res.data)
        })
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
