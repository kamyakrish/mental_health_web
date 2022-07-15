import * as React from "react"
import "./Header.css"
//import Logo from ".Components/Logo/Logo"

export default function Header() {
  return (
    <nav className="header">
      <div className="content">
        <Logo />
        <h1> The Mental Health Hub</h1>
    
      </div>
    </nav>
  )
}