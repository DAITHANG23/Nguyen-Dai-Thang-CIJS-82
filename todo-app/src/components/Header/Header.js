import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <div className='header'>
        
        <ul>
            <li className='all'><Link to="/">All</Link></li>
            <li className='active'><Link to="/active">Active</Link></li>
            <li className='completed'><Link to="/completed">Completed</Link></li>
        </ul>
    </div>
  )
}

export default Header