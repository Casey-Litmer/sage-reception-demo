import React, { useState } from 'react';
import Header from '../../components/Header';
import './Home.css';
import MessageBox from '../../components/MessageBox';
import PageContents from '../../components/PageContents';
import Footer from '../../components/Footer';
import CalenderComponent from '../../components/taskViews/Calendar';


export default function Home() {

    const [view, setView] = useState(<CalenderComponent/>);

    return (
        <div className='bg-background Home'>
            <Header />

            <PageContents>
                <MessageBox/>
                {view}
            </PageContents>

            <Footer view={view} setView={setView}/>
            
        </div>
    );
};
