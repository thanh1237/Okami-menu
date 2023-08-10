import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublicNavbar = (props) => {
    const { handleChangeCarousel } = props;
    return (
        <Navbar
            bg="dark"
            expand="lg"
            style={{
                color: "white",
            }}
        >
            <Navbar.Brand as={Link} to="/" className="mr-auto">
                <h1
                    style={{
                        color: "white",
                    }}
                >
                    Okami
                </h1>
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <div className="nav-container">
                <h6 onClick={() => handleChangeCarousel(0)}>cocktail</h6>
                <h6 onClick={() => handleChangeCarousel(1)}>whiskey</h6>
                <h6 onClick={() => handleChangeCarousel(2)}>food</h6>
            </div>
        </Navbar>
    );
};

export default PublicNavbar;
