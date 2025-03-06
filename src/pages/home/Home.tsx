import React from 'react';
import Header from '../../components/Header';
import './Home.css';
import MessageBox from '../../components/MessageBox';
import PageContents from '../../components/PageContents';


export default function Home() {
    return (
        <div className='bg-background Home'>
            <Header />

            <PageContents>
                <MessageBox/>
            </PageContents>
            
        </div>
    );
};
