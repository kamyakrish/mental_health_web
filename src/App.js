
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Login/Dashboard'
import Main  from './Pages/Login/Main/Main'
import Register from './Pages/Login/Register'


function App() {
  return(


    <div className="app">
        <BrowserRouter>
        <main>

            {

            }

            <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>\
to
        </main>
        </BrowserRouter>
    </div>
);
}

export default App;
