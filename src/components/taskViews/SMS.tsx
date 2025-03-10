import { useState } from 'react';
import './SMS.css';
import { Button } from 'flowbite-react';
import { CiPaperplane } from "react-icons/ci";
import { useMessages } from '../../contexts/MessageProvider';



export default function SMSComponent() {
    const {isMessageResponded} = useMessages();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [response, setResponse] = useState('');
    
    //========================================================================
    const handleSubmit = (ev:any) => {
        ev.preventDefault();
        setPhoneNumber('');
        setResponse('');
        isMessageResponded(phoneNumber);
    };
    const handleNumber = (ev: any) => setPhoneNumber(ev.target.value);
    const handleResponse = (ev: any) => setResponse(ev.target.value);
    
    //============================================================================
    return (
        <form onSubmit={handleSubmit} className=' space-y-2 SMS'>
            <div>Client's Phone Number:</div>
            <input
                type='text'
                value={phoneNumber}
                onChange={handleNumber}
                className='w-2/3 max-w-xl Input'
            />
            <div>Your Response:</div>
            <textarea
                value={response}
                onChange={handleResponse}
                className='w-2/3 max-w-3xl h-48 Input'
            />
            <Button type='submit' color={'black'} className='border-2'>
                <p style={{fontSize:24, marginTop:4}}>Send</p>
                <CiPaperplane size={32} color='var(--color-middle)'/>
            </Button>
        </form>
    );
};
