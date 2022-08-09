import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration';
import ForgetPasswordForm from './components/ForgetPasswordForm';

function App() {


  return (
    <>
      <div className="App">

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgetPassword" element={<ForgetPasswordForm />} />
      </Routes>
        
        </div>
    </>
  );
}

export default App;
