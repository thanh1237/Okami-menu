import React from "react";
import "./HomePage.css";
import { Image } from "react-bootstrap";

function HomePage() {
    return (
        <div id="home">
            <Image style={{ width: "100%", maxHeight: "35rem", objectFit: "cover" }} src="home.jpg" fluid />
        </div>
    );
}

export default HomePage;
