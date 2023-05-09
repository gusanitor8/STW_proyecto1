import React from "react";
import "./SportCard.scss";

const SportCard = (props) => {
    return(
        <>
            <div className="sport-card-super-container">
                <div className="sport-card-image-container">
                    <img className="sport-card-image" src ={props.image}></img>
                </div>
                <div className="sport-card-text-container-container">
                    <div className="sport-card-text-container">
                        <div className="sport-card-tittle-container">
                            <p className="sport-card-tittle">{props.tittle}</p>
                        </div>
                        <div className="sport-card-description-container">
                            <p className="sport-card-description">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportCard;