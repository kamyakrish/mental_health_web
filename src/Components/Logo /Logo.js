import * as React from "react"
import './Logo.css'
import {Routes, Route, useNavigate} from 'react-router-dom';
const logo =require('../../../src/Images/mentalHealth.jpg');

export default function Logo(){
    return (
        <nav className="logo">
      <img src={logo}/>
      <h1>Mental Health Hub </h1>
    </nav>
  )

}