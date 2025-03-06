import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { MessageProvider } from './contexts/MessageProvider';
import { CalendarEventsProvider } from './contexts/CalendarEventsProvider';



function App() {
    return (
      <div>
        <MessageProvider>
          <CalendarEventsProvider>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
          </CalendarEventsProvider>
        </MessageProvider>
      </div>

    );
};

export default App
