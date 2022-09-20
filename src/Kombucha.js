import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import kombuchaImg from "./Kombucha.png";

function Kombucha(){
    return (
        <div className="Kombucha">
        <img src={kombuchaImg} alt="kombucha bottle" />
        <Message>
          <h1>Nice choice. Good source of probiotics</h1>
          <h1><Link to="/">Head on back!</Link></h1>
        </Message>
      </div> 
    );
}

export default Kombucha;

