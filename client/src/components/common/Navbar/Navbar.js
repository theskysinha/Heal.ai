import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
  return (
    <div className='header'>
        <Link to='/'><h1>Heal.ai</h1></Link>
        <ul className='nav-menu'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/journal'>Journal</Link>
            </li>
            <li>
                <Link to='/chatbot'>ChatBot</Link>
            </li>
            <li>
                <Link to='/zen'>Zen Mode</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar