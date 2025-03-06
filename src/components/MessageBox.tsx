import React, { useState } from 'react';
import './MessageBox.css';
import { Message } from '../types';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight} from '@mui/icons-material';
import { useMessages } from '../contexts/MessageProvider';



export default function MessageBox() {
    const {createMessageTimeTable} = useMessages();

    const messageTimeTable = createMessageTimeTable();
    const items = Object.entries(messageTimeTable)
        .flatMap(([time, messages]) => messages)
        .map(message => <MessageContainer message={message}/>)

    return (
        <div className='BoxOutline MessageBox'>
            {items}
        </div>
    );
};

//============================================================================
interface MessageContainerProps {
    message: Message;
}

export function MessageContainer(props: MessageContainerProps) {
    const {message} = props;
    const [open, setOpen] = useState(false);

    const info = `${message.date}  from: ${message.author}`;

    const handleOpen = () => setOpen(o => !o);

    return (
        <div className='BoxOutline MessageContainer'>


            <div style={{flexDirection:'row', display:'flex', alignItems:'center'}}>
                <IconButton id='View Message'
                    onClick = {handleOpen}
                >
                    {open ? <ChevronLeft/> : <ChevronRight/>}
                </IconButton>

                <text>{info}</text>
            </div>

            {open && 
                <div 
                className='BoxOutline DropDownContainer'>
                    {message.message}
                </div>
            }

        </div>
    );
}



