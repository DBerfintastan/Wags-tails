import Layout from '../components/Layout'
import React from 'react'
import '../styles/Partner.css'
import { Link } from 'react-router-dom'
import Partners from "../JsonFiles/Partners.json"



export default function Partner() {
    return (
        <div className='partner'>
            <Layout></Layout>
            <center className="partners">
                <div>
                    <h2>Choose a Partner</h2>
                    {
                        Partners.map((partner) => (
                            <div key={partner.id}>
                                <Link to={`/game`}>
                                    <button className='room1'>
                                        <div>{partner.name}</div>
                                        <div>{partner.status}</div>
                                    </button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </center>
        </div>
    )
}