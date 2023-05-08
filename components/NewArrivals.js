import React from "react";
import "./NewArrivals.scss";
import girl from "../images/newArrivals/girl.png";
import heartIcon from "../images/heart-icon.png";

const NewArrivals = (props) => {
    return(
        <>
            <div className="new-arrival-container">
                <div className="new-arrival-image-container" style={{ backgroundImage: `url(${girl})` }}>
                    <img className="new-arrival-heart" src ={heartIcon}></img>
                    <p className="price">{props.price}</p>
                </div>
                <div className="new-arrival-text-container">
                    <p className="new-arrival-tittle">{props.tittle}</p>
                    <p className="new-arrival-category">{props.category}</p>
                    {props.new ? <p className="new-arrival-new">new</p> : null}
                </div>
            </div>
        </>
    );
};

export default NewArrivals;