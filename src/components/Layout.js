import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Layout.css'
import logo from "../pictures/homeicon.jpg"
export default function Layout() {
  return (
    <div className='layout'>
      <Link to="/home">
        <img src={logo}></img>
      </Link>
      <div >
        <Link to="/room">
          <button>P2P Play</button>
        </Link>
        &nbsp;
        <Link to="/connect">
          <button>Connect Wallet</button>
        </Link>
      </div>
    </div>
  )
}
