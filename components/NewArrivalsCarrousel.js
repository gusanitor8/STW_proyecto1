import React from "react";
import NewArrivals from "./NewArrivals";
import arrow from "../images/arrow.png";
import "./NewArrivalsCarrousel.scss";

const NewArrivalsCarrousel = () => {
    
    const getNewArrivals = () => {
        let content = [];
        for (let i =0; i < 10; i++) {
          content.push(
            <NewArrivals 
                key={i}
                price="$100" 
                tittle="Adicolor 70s SST Track Top"
                category="Women's Originals"
                new = {true}/>
          );
        }
        return content;
      };
          

    return(
        <>
            <div className="new-arrivals-carrousel-super-container">
                <div className="new-arrivals-carrousel-tittle-container">
                    <div className="new-arrivals-carrousel-tittle-selected">
                        <img className="arrow-icon" src={arrow}></img>
                        <p className="new-arrivals-carrousel-tittle">New Arrivals</p>
                    </div>
                    <p className="new-arrivals-carrousel-tittle-deselect">What's Trending</p>
                    <p className="new-arrivals-carrousel-tittle-deselect">Member Exclusives</p>
                </div>
                <div className="new-arrivals-carrousel-container">
                    {getNewArrivals()}                    
                </div>
            </div>
        </>
    );    
}

export default NewArrivalsCarrousel;