import React from "react";

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-info">
                <div className="detail">
                    <div>PRESS ROOM</div>
                    <div className="gift-cer">GIFT CERTIFICATES & COOKBOOK</div>
                    <div>CONTACT</div>
                </div>
                <div className="info">
                    <div>KOKKARI | EVVIA</div>
                    <div>KOKKARI ESTIATORIO</div>
                    <div>200 Jackson Street (at Front St.) San Francisco, CA 94111</div>
                    <div>
                        p: <span className="reservations">415.981.0983</span>
                    </div>
                    <div className="reservations">reservations & hours</div>
                    <div className="reservations">directions</div>
                </div>
            </div>
            <div className="footer-copyright">
                <div>copy right </div>
                <div>copy right </div>
            </div>
        </div>
    );
};

export default Footer;
