import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../pictures/logo.jpg"
import '../styles/Intro.css'
export default function Intro() {
    return (
        <Link to="/home">
            <button className='intro'>
                <div className='intro'>
                    <img src={logo} className="logo"></img>
                    <div className='intro_title1'>wagsandtails.app</div>
                    <div className='intro_title2'>Play, Help, Earn</div>
                    <div className='intro_title3'>Playing heads & tails and saving lives</div>
                </div>
            </button>
        </Link>
    )
}
