import React from "react";
import "./Cover.scss";
import arrow from "../images/arrow.png"



const Cover = () => {
    return(
        <>            
            <div className="container">
                <div className="image-container">
                    <div className="content-container">
                        <div className="content">
                            <h1 className="adiColor">ADICOLOR 70S</h1>
                            <p className="text">Bold characters, statement looks and home hangs. adicolor 70s is back.</p>
                            <div className="buttons">
                                <div className="btnContainer">
                                    <button>SHOP MEN</button>
                                    <img src={arrow}></img>
                                </div>
                                <div className="btnContainer">
                                    <button>SHOP WOMEN</button>
                                    <img src={arrow}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Cover;