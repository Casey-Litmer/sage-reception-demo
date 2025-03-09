import { useState } from 'react';
import './MessageBox.css';
import { Message } from '../../types';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight, Warning} from '@mui/icons-material';
import { useMessages } from '../../contexts/MessageProvider';
import PatienceBar from './PatienceBar';



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
    const urgent = message.timeToRespond < 60000; 

    //============================================================================
    const handleOpen = () => setOpen(o => !o);

    //============================================================================
    return (
        <div className='BoxOutline MessageContainer'>
            
            <div style={{flexDirection:'row', display:'flex', alignItems:'center'}}>
                <IconButton onClick = {handleOpen}>
                    {open ? <ChevronLeft/> : <ChevronRight/>}
                </IconButton>

                <text>{info}</text>

                {urgent && 
                <div className='absolute right-8' 
                    style={{color:'var(--color-middle)'}}>
                    Urgent
                    <Warning/>
                </div>}
            </div>

            <PatienceBar timerBarPercent={timerBarPercent}/>

            {open && 
            <div className='DropDownContainer'>
                <div className='InnerContainer'>
                    {message.message}
                </div>
            </div>}
            
        </div>
    );
};