import React from "react";
import "./CardCarrousel.scss";
import Card from "./Card";

const CardCarrousel = () => {
    const getCards = () => {
        let content = [];
        for (let i =0; i < 4; i++) {
          content.push(
            <Card
                key={i}
                tittle = "INTRODUCING THE TERREX FREE HIKER 2.0" 
                description = "Long distance hiking just got more fun and more comfortable."/>
          );
        }
        return content;
    };
    

    return(
        <>
            <div className="card-carrousel-container">
                {getCards()}
            </div>
        </>
    );
}

export default CardCarrousel;