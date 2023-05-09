import React from "react";
import "./Promo.scss";
import arrow from "../images/arrow-white.png"

const Promo = () => {
    return(
        <>
            <div className="promo-container">
                <p className="promo-anouncement">JOIN OUR ADICLUB & GET 15% OFF</p>
                <div className="btnContainer">
                    <button>SIGN UP FOR FREE</button>
                    <img src={arrow}></img>
                </div>
            </div>
        </>
    );
};

export default Promo;