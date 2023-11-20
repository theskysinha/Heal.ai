import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
    const navigate = useNavigate()
    const logout = async (e) => {
        e.preventDefault()
        axios.get('/logout').then(({ data }) => {
          console.log(data.message)
        })
        navigate('/login')
      }
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
            <li>
                <button type="button" class="btn btn-primary" onClick={logout}>Logout</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar