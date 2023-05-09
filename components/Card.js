import React from "react";
import "./Card.scss";
import hikingShoes from "../images/Card/hiking-shoes.png"

const Card = (props) => {
    return(
        <>
        <div className="card-super-container">
            <div className="card-image-container">
                <img className="card-image" src={hikingShoes}></img>
            </div>
            <div className="card-text-container">
                <div className="card-description-container">
                    <p className="card-tittle">{props.tittle}</p>
                    <p className="card-description">{props.description}</p>
                </div>
                <div className="card-shop-button-container">
                    <p className="card-shop-button">SHOP NOW</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;