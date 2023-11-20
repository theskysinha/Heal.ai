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
    <div className="header">
      <div className="heading">
        <a href="/" className="link-dark" style={{ textDecoration: "none" }}>
          Heal.ai
        </a>
      </div>
      <ul className="nav-menu">
        <div className="profile_image">
          <img src="profile.png" width="80 " height="80" />
        </div>
        <div className="profile_link">
          <a
            href="/Profile"
            className="link-dark"
            style={{ textDecoration: "none" }}
          >
            Profile
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
