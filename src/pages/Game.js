import React, { Component } from 'react'
import '../styles/Game.css'
import Layout from '../components/Layout'
import Coin from "../components/Coin";
import Partners from "../JsonFiles/Partners.json"
import User from "../JsonFiles/User.json"

class CoinContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "wags",
      flipping: false,
      wags: 0,
      tail: 0,
      gamerChoice:"Wag",
      protocolChoice:"Tail"
    };
  }

  ChangeChoice=(choice)=>{
    this.setState((state) => ({
      gamerChoice:choice
    }))
  }
  
  Flip = () => {
    User[0].price=User[0].price-20;
    Partners[0].price=Partners[0].price-20;

    let side = Math.round(Math.random())
    if (side === 1) {
      User[0].price=User[0].price+20;
      this.setState((state) => ({
        side: "wags",
        wags: this.state.wags + 1,
        flipping: true
      }))
    }
    else {
      Partners[0].price=Partners[0].price+20;
      this.setState((state) => ({
        side: "tails",
        tail: this.state.tail + 1,
        flipping: true
      }))
    }
    
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className='game' >

        <Layout></Layout>
        <br></br><br></br><br></br>
        <center>
          <div className="CoinContainer">
            <button className="WagButton" onClick={()=>this.ChangeChoice("Wag")}> Wag </button> &nbsp;&nbsp;&nbsp;
            or &nbsp;&nbsp;&nbsp;
            <button className="TailButton" onClick={()=>this.ChangeChoice("Tail")}>Tail</button>
            <Coin side={this.state.side} flipping={this.state.flipping} />
            <button className="FlipButton" onClick={this.Flip}>Click Here Flip To Coin!</button>
          </div>

          <div className='gameCards'>
            <div className='cardYou'>
              <h2>You</h2>
              <button>{this.state.gamerChoice}</button>
              <div className='cardItem'>
                <div className='cardItemCoin'><b>
                {User[0].price} WT
                </b></div>
              </div>
            </div>

            &nbsp;

            <div className='cardProtocol'>
              <h2>Protocol</h2>
              <button>{this.state.protocolChoice}</button>

              <div className='cardItem'>
                <div className='cardItemCoin'><b>{Partners[0].price} WT</b></div>
              </div>
            </div>
          </div>
          {console.log(this.state.gamerChoice)}
          <div className='text'>Every penny the protocol makes goes to puppy rescue and care.</div>
        </center>
      </div>

    )
  }
}

export default CoinContainer;
