import React from "react";
import "./Sneaker.scss";

const Sneaker = (props) => {
    return(
        <>
            <div className="sneaker-container">
                <div className="sneaker-picture-container">
                    <img className="sneaker-picture" src={props.image}></img>
                </div>
                <div className="sneaker-tittle-container">
                    <h1 className="sneaker-tittle">{props.name}</h1>
                </div>
            </div>
        </> 
    );
};

export default Sneaker;