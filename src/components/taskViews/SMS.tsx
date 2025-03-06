import React, { useState } from 'react';
import './SMS.css';
import { Button } from 'flowbite-react';
import { CiPaperplane } from "react-icons/ci";

export default function SMSComponent() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [response, setResponse] = useState('');
    
    const handleSubmit = (ev:any) => {
        ev.preventDefault();
        
    };
    const handleNumber = (ev: any) => setPhoneNumber(ev.target.value);
    const handleResponse = (ev: any) => setResponse(ev.target.value);
    
    return (
        <form onSubmit={handleSubmit} className=' space-y-2 SMS'>
            <div>Client's Phone Number:</div>
            <input
                type='text'
                onChange={handleNumber}
                className='w-2/3'
            />
            <div>Your Response:</div>
            <textarea
                onChange={handleResponse}
                className='w-2/3 Input'
            />
            <Button type='submit' color={'black'} className='border-2'>
                <p style={{fontSize:24, textAlign:'center'}}>Send</p>
                <CiPaperplane size={32} color='var(--color-middle)'/>
            </Button>
        </form>
    );
};
