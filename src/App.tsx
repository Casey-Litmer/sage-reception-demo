import {Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';



function App() {
    return (
      <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
      </div>

    );
};

export default App
