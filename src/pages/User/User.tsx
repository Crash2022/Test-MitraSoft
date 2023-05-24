import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from '../../shared/hooks/useAppDispatch';
import {getUserTC} from '../../store/posts-reducer';
import {useAppSelector} from '../../shared/hooks/useAppSelector';
import {selectAppStatus, selectUser} from '../../store/selectors';
import {RoutePaths} from '../../shared/api/paths';
import {Button, Col, Row} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Avatar from '../../shared/assets/avatar-04.svg';

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
                    onClick={() => {
                        navigate(RoutePaths.HOME)
                    }}
                    style={{marginBottom: '15px'}}

            >
                Вернуться к списку постов
            </Button>
            {
                user && (
                    <>
                        <div style={{
                            border: '1px solid gray', padding: '5px', borderRadius: '5px',
                            display: 'flex', alignItems: 'center', gap: '10px'}}
                        >
                            <div>
                                <img src={Avatar}
                                     alt="my-avatar"
                                     width={70}
                                     height={70}
                                     style={{borderRadius: '50%'}}
                                />
                            </div>
                            <div>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>{user.email}</Card.Text>
                            </div>
                        </div>
                        <div>123</div>
                    </>
                )
            }
        </div>
    )
}
