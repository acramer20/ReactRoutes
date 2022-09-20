import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import almondBarImg from "./AlmondBar.png";

function AlmondBar(){
    return (
        <div className="AlmondBard">
        <img src={almondBarImg} alt="Almond biscuit from nature valley" />
        <Message>
          <h1>A good way to pretend you're eating healthy!</h1>
          <h1><Link to="/">Head on back!</Link></h1>
        </Message>
      </div> 
    );
}

export default AlmondBar;