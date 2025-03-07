import {Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import { MessageProvider } from './contexts/MessageProvider';
import { CalendarEventsProvider } from './contexts/CalendarEventsProvider';
import Home from './pages/home/Home';



function App() {
    return (
      <div>
        <MessageProvider>
          <CalendarEventsProvider>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
          </CalendarEventsProvider>
        </MessageProvider>
      </div>

    );
};

export default App
