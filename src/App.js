import './App.css';
import { Routes,Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import Login from './components/login';
import Timeline from './components/timeline';
import Register from './components/UserRegistration';
// import Navbar from './components/NavBar';
import CobaNavbar from './components/cobaNavbar';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <CobaNavbar/>
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
