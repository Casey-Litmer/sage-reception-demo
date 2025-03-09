import { Accordion } from 'flowbite-react';
import './Home.css';
import React from 'react';
import { Divider } from '@mui/material';




export default function FaqAccordion() {
    return (
        <Accordion className="Accordion">
            <Accordion.Panel>
                <Accordion.Title className="Accordion-Title">Getting Started</Accordion.Title>
                <Accordion.Content className="Accordion-Content">
                    <Q>How can I sign up?</Q>
                    <A>No sign up required!  All you have to do is hit "Clock In!"</A>
                    <Q>Wait, so how do I know if these are even my customers?</Q>
                    <A>You don't!  The way it works is we distribute all incoming messages
                        between all users online at any given time.  It turns out that 
                        sending smaller batches of work to multiple people in parallel is
                        extremely efficient!  This is called "concurrency". </A>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="Accordion-Title">Is this even necessary?</Accordion.Title>
                <Accordion.Content className="Accordion-Content">
                    <Q>This doesn't seem that different from what I already am doing.</Q>
                    <A>Think not what Staged Reception can do for you, but what you can
                        do better for yourself with Staged Reception!  Confucius once said: 
                        "he who improves 1% will eventually surpass he who improves 100%".  It's 
                        not about fixing every problem in your life, it's about making it slightly easier
                        one step at a time.  So go FAQ yourself this: "Why would I not want to improve, even just a little?"</A>
                    <Q>Did Confucius really say that?</Q>
                    <A>Yea, probably.</A>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="Accordion-Title">Why Staged Reception?</Accordion.Title>
                <Accordion.Content className="Accordion-Content">
                    <Q>Why would I use this service when I could use
                       Sage Reception which completely automates all of
                       these features and more with AI?</Q>
                    <A>That's a great question!</A>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
};

//==============================================================================================================
interface WrapperProps {
    children?: React.ReactNode;
};
const Q = ({children}: WrapperProps) => {
    return (
    <div className='flex flex-row space-x-2'>
        <h4 style={{color:'var(--color-middle)'}}>Q:</h4>
        <h4>{children}</h4>
    </div>
    );
};

const A = ({children}: WrapperProps) => {
    return (
    <div>
        <Divider sx={{marginBottom:'8px', 
                      marginLeft:'20px', 
                      borderBottomWidth:'4px', 
                      borderColor:'var(--color-top)'}}/>
        <p className='bg-grey1 rounded-lg p-3 leading-relaxed'>{children}</p>
    </div>
    );
};