import React from "react";
import "../styles/Coin.css"
import logo from "../pictures/loading.gif"
const Coin = (props) => {
    return (
        <center>
            <div>
                <div className="CoinState">
                    {props.flipping === true && <div>
                        <img src={logo}>
                        </img></div>}
                    {props.flipping === false && <div> {props.side} </div>}
                </div>
            </div>
        </center>
    );
};

export default Coin;