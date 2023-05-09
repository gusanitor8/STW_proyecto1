import React from "react";
import "./Popular.scss";

const Popular = () => {
    return(
        <>
            <div className="popular-super-container">
                <p className="popular-tittle">Popular right now</p>
                <div className="popular-grid-container">
                    <div className="popular-grid-items">
                        <p className="popular-grid-items-text">ultraboost</p>
                    </div>
                    <div className="popular-grid-items">
                        <p className="popular-grid-items-text">nmd</p>
                    </div>
                    <div className="popular-grid-items">
                        <p className="popular-grid-items-text">backpacks</p>
                    </div>
                    <div className="popular-grid-items">
                        <p className="popular-grid-items-text">cleats</p>
                    </div>
                    <div className="popular-grid-items">
                        <p className="popular-grid-items-text">stan smith</p>
                    </div>
                    <div className="popular-grid-items">
                        <p className="popular-grid-items-text">samba</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popular;