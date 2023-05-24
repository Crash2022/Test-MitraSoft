import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {getUserTC} from "../../store/user-reducer";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectUser} from "../../store/selectors";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
import {RoutePaths} from "../../shared/api/paths";
import {Button} from "react-bootstrap";

export const User = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const params = useParams<'userId'>()
    const user = useAppSelector(selectUser)

    useEffect(() => {
        dispatch(getUserTC(Number(params.userId)))
    }, [params.userId])

    return (
        <div>
            {/*<div>*/}
            {/*    <Breadcrumb>*/}
            {/*        <Breadcrumb.Item href={RoutePaths.HOME}>Посты</Breadcrumb.Item>*/}
            {/*        <Breadcrumb.Item active>Пользователь: ID={params.userId}</Breadcrumb.Item>*/}
            {/*    </Breadcrumb>*/}
            {/*</div>*/}

            <Button variant="primary" onClick={() => {navigate(RoutePaths.HOME)}}>Вернуться к постам</Button>

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
