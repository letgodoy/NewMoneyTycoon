import React from 'react'
import logo from '../../assets/imgs/Logo.png'
import { Link } from 'react-router-dom'
import './Logo.scss'

export default props =>
    <header className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            <h3 className="aviso">Em breve o Money Tycoon voltará em novo formato. <strong>Aguarde!</strong></h3>
        </Link>
    </header>