import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import reesesImg from "./Reeses.png";

function Reeses(){
    return (
        <div className="Reeses">
        <img src={reesesImg} alt="Halloween Reeses" />
        <Message>
          <h1>Reeses for daaaaayyyyyyssss!!</h1>
          <h1><Link to="/">Head on back!</Link></h1>
        </Message>
      </div> 
    );
}

export default Reeses;