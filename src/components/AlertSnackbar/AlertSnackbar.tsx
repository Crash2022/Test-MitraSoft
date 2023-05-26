import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

type AlertSnackbarProps = {
    show: boolean
    setShow: (value: boolean) => void
}

export const AlertSnackbar = ({show, setShow}: AlertSnackbarProps) => {

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Please, reload the page
                </p>
            </Alert>
        )
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}