import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'
import Logo from '../components/template/Logo'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
        </div>
    </HashRouter>
