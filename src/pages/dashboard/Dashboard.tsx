import { useEffect, useRef, useState } from 'react';
import './Dashboard.css';
import MessageBox from '../../components/messageBox/MessageBox';
import PageContents from '../../components/PageContents';
import Toolbar from '../../components/toolbar/Toolbar';
import Header from '../../components/header/Header';
import CalenderComponent from '../../components/taskViews/Calendar';
import { MessageProvider } from '../../contexts/MessageProvider';
import { CalendarEventsProvider } from '../../contexts/CalendarEventsProvider';
import GameOverScreen from './GameOverScreen';



export default function Dashboard() {
    const [view, setView] = useState(<CalenderComponent/>);
    const [isRunning, setIsRunning] = useState(true);


    return (
        <MessageProvider isRunning={isRunning} setIsRunning={setIsRunning}>
            <CalendarEventsProvider>
                <div className='bg-background Dashboard'>
                    <Header clockButtonMode='out'/>

                    <PageContents>
                        <MessageBox/>
                        {view}
                    </PageContents>

                    <Toolbar view={view} setView={setView}/>

                    {!isRunning && <GameOverScreen/>}
                </div>
            </CalendarEventsProvider>
        </MessageProvider>
    );
};
