import React from 'react';
import {Button, Card} from "react-bootstrap";
import MyAvatar from '../../shared/assets/my-avatar300.jpg'

export const About = () => {

    const getFile = () => {
        fetch( 'Chashin_Alexander_Evgenievich_CV.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'Chashin_Alexander_Evgenievich_CV.pdf'
                alink.click()
                alink.remove()
            })
        })
    }

    return (
        <Card style={{ width: '300px' }}>
            <Card.Img variant="top" src={MyAvatar} />
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Обо мне</Card.Title>
                <Card.Text>
                    Я фронт-энд программист, в частности занимаюсь разработкой SPA приложений.
                    Постоянно учусь чему-то новому, в планах стать фулл-стэк разработчиком.
                    Более подробное резюме вы можете скачать по кнопке ниже или на моём {' '}
                    <a href={'https://my-portfolio-app-beryl.vercel.app'} target="_blank">сайте</a>.
                </Card.Text>
                <div style={{textAlign: 'center'}}>
                    <Button variant="primary" onClick={getFile}>Скачать резюме</Button>
                </div>
            </Card.Body>
        </Card>
    )
}