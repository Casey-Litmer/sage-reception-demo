import { useState } from 'react';
import './MessageBox.css';
import { Message } from '../types';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight} from '@mui/icons-material';
import { useMessages } from '../contexts/MessageProvider';



export default function MessageBox() {
    const {pendingMessages} = useMessages();

    const items = pendingMessages.map(ms => {
        const key = ms.message.messageTime.toString();
        const message = ms.message;
        const remainingTime = ms.remainingTime;
        return <MessageContainer key={key} message={message} remainingTime={remainingTime}/>
    });

    return (
        <div className='BoxOutline MessageBox'>
            {items}
        </div>
    );
};

//============================================================================
interface MessageContainerProps {
    message: Message;
    remainingTime: number;
};
export function MessageContainer(props: MessageContainerProps) {
    const {message, remainingTime} = props;
    const [open, setOpen] = useState(false);
    
    //============================================================================
    const messageTime = message.messageTime;
    const timerBarPercent = remainingTime / message.timeToRespond * 100;
    const formattedTime = `${messageTime.getHours()}:${messageTime.getMinutes()}:${messageTime.getSeconds()}`
    const info = `[${formattedTime}]: ${message.author} (${message.phoneNumber})`;
    
    //============================================================================
    const handleOpen = () => setOpen(o => !o);

    //============================================================================
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

            <div className='h-2.1 w-full' style={{
                borderTop: 1, borderBottom:1, 
                borderStyle:'solid', borderColor: 'var(--color-top)'
        
            }}>
                <div className='bg-middle h-2' id='TimerBar'
                    style={{width:`${timerBarPercent}%`}}/>
            </div>

            {open && 
                <div 
                className='DropDownContainer'>
                    {message.message}
                </div>
            }
        </div>
    );
};