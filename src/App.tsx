import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { MessageProvider } from './contexts/MessageProvider';



function App() {

    return (
      <div>
        <MessageProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </MessageProvider>
      </div>

    );
};

export default App
