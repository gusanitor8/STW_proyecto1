import React from "react";
import "./Footer.scss";

const Footer = () => {
    const menuItems = {
        'PRODUCTS': ['shoes', 'clothing', 'accessories', 'gift cards', 'new arrivals', 'best sellers', 'release dates', 'sale'],
        'SPORTS': ['soccer', 'running', 'basketball', 'football', 'outdoor', 'golf', 'baseball', 'tennis', 'skateboarding', 'training'],
        'COLLECTIONS': ['back to school', 'adicolor', 'ultraboost', 'nmd', 'forum', 'superstar', 'running shoes', 'adilette', 'stan smith', 'adizero', 'tiro', 'eqt'],
        'SUPPORT': ['help', 'returns & exchanges', 'shipping', 'order tracker', 'store locator', 'size charts', 'gift card balance', 'how to clean shoes', 'running shoe finder', 'bra fit guide', 'sports bra finder', 'breathing for running', 'promotions'],
        'COMPANY INFO': ['about us', 'student discount', 'military & healthcare discount', 'adidas stories', 'adidas apps', 'sustainability', 'adiClub', 'affiliates', 'press', 'careers', 'california transparency in supply chains act', 'responsible disclosure', 'transparency in coverage', 'country selector'],
    };

    const getItems = (key) => {
        let content = [];
        
        for(let i = 0; i < menuItems[key].length; i++){
            content.push(<li className="footer-items" key = {i}>{menuItems[key][i]}</li>)
        }
        return content;
    }
      
    return(
        <>
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-grid-tittle">
                        <p className="footer-tittle">PRODUCTS</p>
                        <ul>
                            {getItems('PRODUCTS')}
                        </ul>
                    </div>

                    <div className="footer-grid-tittle">
                        <p className="footer-tittle">SPORTS</p>
                        <ul>
                            {getItems('SPORTS')}
                        </ul>
                    </div>

                    <div className="footer-grid-tittle">
                        <p className="footer-tittle">COLLECTIONS</p>
                        <ul>
                            {getItems('COLLECTIONS')}
                        </ul>
                    </div>

                    <div className="footer-grid-tittle">
                        <p className="footer-tittle">PRODUCTS</p>
                        <ul>
                            {getItems('PRODUCTS')}
                        </ul>
                    </div>

                    <div className="footer-grid-tittle">
                        <p className="footer-tittle">SUPPORT</p>
                        <ul>
                            {getItems('SUPPORT')}
                        </ul>
                    </div>

                    <div className="footer-grid-tittle">
                        <p className="footer-tittle">COMPANY INFO</p>
                        <ul>
                            {getItems('COMPANY INFO')}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;