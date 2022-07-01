import React from 'react'
import Layout from '../components/Layout'
import '../styles/Room.css'
import { Link } from 'react-router-dom'
import Rooms from "../JsonFiles/Rooms.json"
export default function Room() {

    return (
        <div className='room'>
            <Layout></Layout>
            <center className="rooms">
                <div>
                    <h2>Choose a Room</h2>

                    {
                        Rooms.map((room) => (
                            <div key={room.id}>
                                <Link to={`/partner`}>
                                    <button className='room1'>
                                        <div>{room.name}</div>
                                        <div>{room.price} WT</div>
                                    </button>
                                </Link>
                            </div>
                        ))
                    }
                    <div className='text'>
                        *There is a 1000 WT cap for bets
                    </div>
                </div>
            </center>
        </div>
    )
}
