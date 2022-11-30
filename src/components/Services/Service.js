import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function Service() {
    return (
        <div>
            <h1>Nos services</h1>
            <nav>
                <Link to="/services/developpement">Service développement</Link>
                <Link to="/services/marketing">Service Marketing</Link>
            </nav>
            <Outlet />
        </div>

    )
}
