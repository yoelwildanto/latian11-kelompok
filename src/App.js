import './App.css';
import { Routes,Route, Router } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import Login from './components/login';
import Timeline from './components/timeline';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/timeline' element={<Timeline/>}/>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
