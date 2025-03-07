import { useState } from 'react';
import './Dashboard.css';
import MessageBox from '../../components/MessageBox';
import PageContents from '../../components/PageContents';
import Toolbar from '../../components/toolbar/Toolbar';
import Header from '../../components/header/Header';
import CalenderComponent from '../../components/taskViews/Calendar';



export default function Dashboard() {
    const [view, setView] = useState(<CalenderComponent/>);

    return (
        <div className='bg-background Dashboard'>
            <Header clockButtonMode='out'/>

            <PageContents>
                <MessageBox/>
                {view}
            </PageContents>

            <Toolbar view={view} setView={setView}/>
        </div>
    );
};
