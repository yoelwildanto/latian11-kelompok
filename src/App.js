import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import Login from "./components/login";
import Timeline from "./components/timeline";
import Register from "./components/UserRegistration";
// import Navbar from './components/NavBar';
import CobaNavbar from "./components/cobaNavbar";
import TweetContextProvider from "./Context/Context";
import PrivateRoutes from "./private/privateAuth";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <TweetContextProvider>
        <CobaNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes/>}>
          <Route path="/timeline" element={<Timeline />} />
          </Route>
        </Routes>
      </TweetContextProvider>
      {/* </Router> */}
    </div>
  );
}

export default App;
