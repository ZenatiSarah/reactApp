import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/services">Services</Link>
                <Link to="/survey">Questionnaire</Link>
                <Link to="/results">Resultats</Link>
                <Link to="/freelances">Freelances</Link>
            </nav>
        </div>
    )
}
