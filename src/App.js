import './App.css';
import Login from './component/Login';
// import "~bootstrap/scss/bootstrap";
import { Route,Routes, } from 'react-router-dom';
import Profile from './component/Profile';

function App() {
  return (
    <>
  {/* <Login/> */}
  <Routes>
  <Route exact path="/" element={<Login/>} />
  <Route exact path="/profile" element={<Profile/>} />

  </Routes>
    </>
  );
}

export default App;
