import * as React from "react"
import './Logo.css'
import {Routes, Route, useNavigate} from 'react-router-dom';
const logo =require('../../../src/Images/mentalHealth.jpg');

export default function Logo(){
    return (
        <div className="logo">
      <img src={logo} width="500" height="auto"/>

    </div>
  )

}
