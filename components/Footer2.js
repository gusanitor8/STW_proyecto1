import React from "react";
import "./Footer2.scss";

const Footer2 = () => {
    return(
        <>
            <div className="footer2-super-container">
                <div className="footer2-container">
                    <p className="footer2-item">Cookie Settings</p>
                    <p className="footer2-item">|</p>

                    <p className="footer2-item">Data Settings</p>
                    <p className="footer2-item">|</p>
                    
                    <p className="footer2-item">Do not sell my personal information</p>
                    <p className="footer2-item">|</p>

                    <p className="footer2-item">Privacy Policy</p>
                    <p className="footer2-item">|</p>

                    <p className="footer2-item">Terms and Conditions</p>                    
                </div>
                <div className="footer2-container">
                    <p className="footer2-item">© 2023 adidas America, Inc.</p>         
                    
                </div>
            </div>
        </>
    );
};

export default Footer2;