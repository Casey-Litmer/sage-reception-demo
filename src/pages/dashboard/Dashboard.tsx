import { useState } from 'react';
import './Dashboard.css';
import MessageBox from '../../components/MessageBox';
import PageContents from '../../components/PageContents';
import Toolbar from '../../components/toolbar/Toolbar';
import Header from '../../components/header/Header';
import CalenderComponent from '../../components/taskViews/Calendar';
import { MessageProvider } from '../../contexts/MessageProvider';
import { CalendarEventsProvider } from '../../contexts/CalendarEventsProvider';



export default function Dashboard() {
    const [view, setView] = useState(<CalenderComponent/>);

    return (
        <MessageProvider>
            <CalendarEventsProvider>
                <div className='bg-background Dashboard'>
                    <Header clockButtonMode='out'/>

                    <PageContents>
                        <MessageBox/>
                        {view}
                    </PageContents>

                    <Toolbar view={view} setView={setView}/>
                </div>
            </CalendarEventsProvider>
        </MessageProvider>
    );
};
