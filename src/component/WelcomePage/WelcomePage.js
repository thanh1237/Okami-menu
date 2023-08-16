import React from "react";
import "./WelcomePage.css";
const WelcomePage = (props) => {
    return (
        <section id="welcome">
            <div className="welcome">
                {/* <img
                    className="home"
                    src="/home_xl.jpg"
                    alt="home"
                    style={{
                        width: " 100%",
                        height: "100%",
                        background: "black",
                        objectFit: "cover",
                    }}
                /> */}
                <div className="board">
                    <div className="operation">
                        <h2>OKAMI</h2>
                        <h4>OPERATION HOUR</h4>
                        <h5>Dinner</h5>
                        <p>Tue - Sun:</p>
                        <p style={{ color: "#ff0000" }}>5PM - Mid night</p>
                    </div>
                    <div
                        className="divider"
                        style={{
                            textAlign: "center",
                            width: "100%",
                            height: "1px",
                            margin: "10px 0",
                        }}
                    ></div>
                    <div className="hotline">
                        <h2>HOTLINE</h2>
                        <p>0942246710</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomePage;
