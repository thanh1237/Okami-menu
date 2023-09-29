import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PublicNavbar = () => {
    const navigate = useNavigate();
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    const handleNavigate = (url) => {
        navigate(url);
    };
    return (
        <Nav style={{ marginBottom: "50px" }} activeKey="1" onSelect={handleSelect}>
            <div className="brand-logo">
                <img src="/logo.png" alt="logo" />
            </div>
            <Nav.Item onClick={() => handleNavigate("/about")}>About</Nav.Item>
            <Nav.Item onClick={() => handleNavigate("/cuisine")}>Cuisine</Nav.Item>
            <div className="dropdown">
                <Nav.Item className="dropbtn">MENUS</Nav.Item>
                <div className="dropdown-content">
                    <a href="#">Lunch Menu</a>
                    <div className="border" />
                    <a href="#">Diner Menu</a>
                    <div className="border" />
                    <a href="#">Wine list</a>
                </div>
            </div>
            <Nav.Item onClick={() => handleNavigate("/reservation")}>Reservations</Nav.Item>
            <Nav.Item onClick={() => handleNavigate("/private-dining")}>Private Dining</Nav.Item>
        </Nav>
    );
};

export default PublicNavbar;
