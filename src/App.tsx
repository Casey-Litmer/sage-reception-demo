import {Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';



function App() {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    );
};

export default App
