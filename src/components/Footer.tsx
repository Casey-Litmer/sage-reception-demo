import React, { JSX, useState } from 'react';
import './Footer.css';
import 'flowbite/dist/flowbite.css';
import { FOOTER_HEIGHT } from '../GLOBALS';
import { Button } from 'flowbite-react';
import CalendarComponent from './taskViews/Calendar';
import SMSComponent from './taskViews/SMS';
import { FaRegCalendarAlt, FaPaperPlane } from "react-icons/fa";


const ICON_SIZE = 32;

interface FooterProps {
    view: JSX.Element;
    setView: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

export default function Footer(props: FooterProps) {
    const {setView} = props;

    return (
        <div className='BoxOutline Footer bg-background' style={{height: FOOTER_HEIGHT}}>
            <Button.Group>
                <Button onClick={() => setView(<CalendarComponent/>)}>
                    <FaRegCalendarAlt size={ICON_SIZE} color='var(--color-middle)'/>
                </Button>
                <Button onClick={() => setView(<SMSComponent/>)}>
                    <FaPaperPlane size={ICON_SIZE} color='var(--color-middle)'/>
                </Button>
            </Button.Group>
        </div>
    );
};

