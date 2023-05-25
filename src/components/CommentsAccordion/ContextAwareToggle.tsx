import React, {useContext} from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import {AccordionContext} from 'react-bootstrap';

type ContextAwareToggleProps = {
    children: string
    eventKey: string
    callback?: (eventKey: string) => void
}

export const ContextAwareToggle = ({ children, eventKey, callback }: ContextAwareToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext)

    const decoratedOnClick = useAccordionButton(
        eventKey, () => callback && callback(eventKey)
    )

    const isCurrentEventKey = activeEventKey === eventKey

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    )
}