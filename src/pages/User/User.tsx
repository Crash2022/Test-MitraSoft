import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from '../../shared/hooks/useAppDispatch';
import {getUserTC, setUserPostsAC} from '../../store/posts-reducer';
import {useAppSelector} from '../../shared/hooks/useAppSelector';
import {selectAppStatus, selectUser, selectUserPosts} from '../../store/selectors';
import {RoutePaths} from '../../shared/api/paths';
import {Container, Button} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Avatar from '../../shared/assets/avatar-04.svg';
import {PostItem} from "../../components/PostItem/PostItem";
import {useFetchData} from "../../shared/hooks/useFetchData";
import {PostType} from "../../shared/types/types";

export const User = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const params = useParams<'userId'>()
    const status = useAppSelector(selectAppStatus)
    const user = useAppSelector(selectUser)
    const userPosts = useAppSelector(selectUserPosts)

    const userPostsLS = window.localStorage.getItem('userPosts')

    useFetchData(() => {dispatch(getUserTC(Number(params.userId)))},
        () => {dispatch(setUserPostsAC(Number(params.userId)))}, params.userId)

    useEffect(() => {
        if (userPosts.length > 0) window.localStorage.setItem('userPosts', JSON.stringify(userPosts))
    }, [userPosts])

    if (status === 'loading')
        return <Spinner animation="border" variant="primary" style={{marginTop: '300px'}}/>

    return (
        <Container>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
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
                        <div style={{
                            border: '1px solid gray', padding: '5px', borderRadius: '5px',
                            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'
                        }}
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
                                <Card.Title>id={params.userId}, {user.name}</Card.Title>
                                <Card.Text>
                                    <span style={{textDecoration: 'underline'}}>e-mail:</span> {user.email}
                                </Card.Text>
                            </div>
                        </div>
                    )
                }
                {/*<div style={{textDecoration: 'underline'}}>*/}
                {/*    Список постов пользователя:*/}
                {/*</div>*/}
                <ul>
                    {
                        userPosts.length > 0 ?
                            userPosts.map(up => {
                                return (
                                    <PostItem key={up.id} post={up} isTooltip={false}/>
                                )
                        })
                            : userPostsLS && JSON.parse(userPostsLS!).map((up: PostType) => {
                                return (
                                    <PostItem key={up.id} post={up} isTooltip={false}/>
                                )
                            })
                    }
                </ul>
            </div>
        </Container>
    )
}
