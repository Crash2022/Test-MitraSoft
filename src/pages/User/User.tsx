import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {getUserTC} from "../../store/user-reducer";
import {useAppSelector} from "../../shared/hooks/useAppSelector";
import {selectAppStatus, selectUser} from '../../store/selectors';
import {RoutePaths} from "../../shared/api/paths";
import {Button} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

export const User = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const params = useParams<'userId'>()
    const user = useAppSelector(selectUser)
    const status = useAppSelector(selectAppStatus)

    useEffect(() => {
        dispatch(getUserTC(Number(params.userId)))
    }, [params.userId])

    if (status === 'loading') return <Spinner animation="border" variant="primary" style={{marginTop: '300px'}}/>

    return (
        <div>
            <Button variant="primary"
                    onClick={() => {navigate(RoutePaths.HOME)}}
            >
                Вернуться к постам
            </Button>
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
