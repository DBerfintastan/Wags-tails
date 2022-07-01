import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import logo from "../pictures/home.jpg"
export default function Home() {
    return (
        <Link to="/game">
            <center >
                <button className='home'>
                    <div>
                        <img src={logo}></img>
                        <div className='home_title1'>Wags&Tails</div>
                        <div className='home_title2'><b>Flip the coin!</b></div>
                        <div className='home_title3'>Either you win money, or a puppy wags its tail.</div>
                        <div className='home_title4'>Every penny the protocol makes goes to puppy rescue and care</div>
                        <br /><br /><br />
                        <button className='home_button'>See Our Partners</button>
                    </div>
                </button>
            </center>
        </Link>
    )
}
