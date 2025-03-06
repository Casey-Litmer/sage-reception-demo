import { useState } from 'react';
import './Home.css';
import MessageBox from '../../components/MessageBox';
import PageContents from '../../components/PageContents';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
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
