import React from "react";
import Sneaker from "./Sneaker";
import "./SneakerCarrousel.scss";  
import womenShoe from "../images/sneakers/women-shoes.png"; 
import menShoe from "../images/sneakers/men-shoes.png"; 
import womenSneaker from "../images/sneakers/women-sneakers.png";
import menSneaker from "../images/sneakers/men-sneakers.png";

const SneakerCarrousel = () => {
    return(
        <>
           <div className="sneaker-component-container">
                <Sneaker name="MEN'S SNEAKERS" image={menSneaker}/>
                <Sneaker name="WOMEN'S SNEAKERS" image={womenSneaker}/>
                <Sneaker name="MEN'S SHOES" image={menShoe}/>
                <Sneaker name="WOMEN'S SHOES" image={womenShoe}/>
            </div>
        </>
    );
};

export default SneakerCarrousel;