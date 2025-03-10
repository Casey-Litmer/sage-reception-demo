import React, { JSX } from 'react';
import './Toolbar.css';
import 'flowbite/dist/flowbite.css';
import { FOOTER_HEIGHT, ICON_SIZE_STD } from '../../GLOBALS';
import { Button } from 'flowbite-react';
import CalendarComponent from '../taskViews/Calendar';
import SMSComponent from '../taskViews/SMS';
import { FaRegCalendarAlt, FaPaperPlane } from "react-icons/fa";




interface FooterProps {
    view: JSX.Element;
    setView: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

export default function Toolbar(props: FooterProps) {
    const {setView} = props;

    return (
        <div className='BoxOutline Toolbar bg-background' style={{height: FOOTER_HEIGHT}}>
            <Button.Group className='space-x-2'>
                <Button onClick={() => setView(<CalendarComponent/>)}>
                    <FaRegCalendarAlt size={ICON_SIZE_STD} color='var(--color-middle)'/>
                </Button>
                <Button onClick={() => setView(<SMSComponent/>)}>
                    <FaPaperPlane size={ICON_SIZE_STD} color='var(--color-middle)'/>
                </Button>
            </Button.Group>
        </div>
    );
};

