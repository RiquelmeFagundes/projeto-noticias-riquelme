import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {

  return (
    <div>
        
        <header>
            <div className="header-content">
            <h1>Globe</h1>
            <nav>
                <NavLink className="home" to = "/">Home</NavLink>
            </nav>
            </div>
        </header>

        <Outlet/>

        <footer>
            <p>© Todos os direitos reservados | 2026 - Globe</p>
        </footer>
    </div>
  );
}
