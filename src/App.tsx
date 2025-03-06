import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { MessageProvider } from './contexts/MessageProvider';
import CalendarPage from './pages/calendar/CalendarPage';
import { EventsProvider } from './contexts/EventsProvider';



function App() {

    return (
      <div>
        <MessageProvider>
          <EventsProvider>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
          </EventsProvider>
        </MessageProvider>
      </div>

    );
};

export default App
