import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <header>
            <h1>Meu Portal</h1>
            <nav>
                <NavLink to = "/">Home</NavLink>
            </nav>
        </header>

        <Outlet/>

        <footer>
            <p>© Todos os direitos reservados | 2026 - Meu Portal</p>
        </footer>
    </div>
  );
}
