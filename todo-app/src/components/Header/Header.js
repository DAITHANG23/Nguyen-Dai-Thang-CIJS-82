import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  const [cardAll, setCardAll] = useState(true)
  const [cardActive, setCardActive] = useState(false)
  const [cardCompleted, setCardCompleted] = useState(false)
  const onCardAll = () =>{
    setCardAll(true)
    setCardActive(false)
    setCardCompleted(false)
  }

  const onCardActive = () =>{
    setCardActive(true)
    setCardAll(false)
    setCardCompleted(false)
  }

  const onCardCompleted = () =>{
    setCardCompleted(true)
    setCardAll(false)
    setCardActive(false)
  }

  const styleCardAll = cardAll ? "active" : ""
  const styleCardActive = cardActive ? "active" : ""
  const styleCardCompleted = cardCompleted ? "active" : ""

  return (
    <div className='header'>
        
        <ul>
            <li onClick={onCardAll} className={styleCardAll}><Link to="/">All</Link></li>
            <li onClick={onCardActive} className={styleCardActive}><Link to="/active">Active</Link></li>
            <li onClick={onCardCompleted} className={styleCardCompleted}><Link to="/completed">Completed</Link></li>
        </ul>

        
    </div>
  )
}

export default Header