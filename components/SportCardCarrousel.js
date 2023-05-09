import React from "react";
import SportCard from "./SportCard";
import sportImage from "../images/sportCard/football.png"
import "./SportCardCarrousel.scss";

const SportCardCarrousel = () => {
    const getSportCards = () => {
        let content = [];
        for (let i =0; i < 6; i++) {
          content.push(
            <SportCard 
                key={i}
                image = {sportImage}
                tittle = "What Is A Penalty Kick In Soccer"
                description = "Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adi..."/>
          );
        }
        return content;
    
    }

    return(
        <>  
            <div className="sport-card-carrousel-super-container">
                <p className="sport-card-carrousel-tittle">MORE FROM ADIDAS STORIES</p>
                <div className="sport-card-carrousel-container">
                    {getSportCards()}
                </div>
            </div>
        </>
    );
};

export default SportCardCarrousel;