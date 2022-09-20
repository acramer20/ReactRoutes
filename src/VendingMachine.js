import React from "react";
import Message from "./Message";
import { Link } from "react-router-dom";

function VendingMachine(){
    return (
        <div className="VendingMachine">
            <Message>
                <h1>Welcome to Vending Machine, pick a snack!</h1>
            </Message>
            <Message>
                <h1><Link to="/reeses">Reeses</Link></h1>
                <h1><Link to="/almond_bar">Almond Bar</Link></h1>
                <h1><Link to="/kombucha">Kombucha</Link></h1>
            </Message>
        </div>
    );
}

export default VendingMachine;