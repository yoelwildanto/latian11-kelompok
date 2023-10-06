import './App.css';
import { Routes,Route, Router } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import Login from './components/login';
import Timeline from './components/timeline';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/timeline' element={<Timeline/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
