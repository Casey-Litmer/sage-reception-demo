import { useState } from 'react';
import './MessageBox.css';
import { Message } from '../../types';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight,} from '@mui/icons-material';
import { IoMdWarning } from "react-icons/io";
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
    const formattedTime = String(messageTime.getHours()).padStart(2, '0') + ':'
                        + String(messageTime.getMinutes()).padStart(2, '0') + ':'
                        + String(messageTime.getSeconds()).padStart(2, '0')
    const info = `[${formattedTime}]: ${message.author} (${message.phoneNumber})`;
    const urgent = message.timeToRespond < 60000; 

    //============================================================================
    const handleOpen = () => setOpen(o => !o);

    //============================================================================
    return (
        <div className='BoxOutline MessageContainer'>
            
            <div className='flex flex-row items-center'>
                <IconButton onClick = {handleOpen}>
                    {open ? <ChevronLeft/> : <ChevronRight/>}
                </IconButton>

                <text>{info}</text>

                {urgent && 
                <div className='absolute right-8 flex' 
                    style={{color:'var(--color-middle)'}}>
                    Urgent
                    <IoMdWarning size={24}/>
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