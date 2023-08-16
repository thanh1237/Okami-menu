import React from "react";
import "./MenuPage.css";
import { Col, Row } from "react-bootstrap";
import CardItem from "component/CardItem/CardItem";

const MenuPage = (props) => {
    const { category, handleChangeCarousel, navSelected } = props;

    return (
        <div id="menu-page">
            <div id="menuNav">
                <h4 onClick={() => handleChangeCarousel(1)} className={navSelected === 1 ? "selectedMenu" : "textMenu"}>
                    WHISKEY
                </h4>
                <svg width="10vw" height="10vw" xmlns="/table_4.png">
                    <image href="/line.png" height="100%" width="100%" />
                </svg>
                <h4 onClick={() => handleChangeCarousel(0)} className={navSelected === 0 ? "selectedMenu" : "textMenu"}>
                    COCKTAIL
                </h4>
                <svg width="10vw" height="10vw" xmlns="/table_4.png">
                    <image href="/line.png" height="100%" width="100%" />
                </svg>
                <h4 onClick={() => handleChangeCarousel(2)} className={navSelected === 2 ? "selectedMenu" : "textMenu"}>
                    FOOD
                </h4>
            </div>

            <Row style={{ background: "black"}}>
                {category?.map((item, idx) => {
                    return (
                        <Col xs={12} md={4} lg={3} key={idx} className="item-container">
                            <CardItem item={item} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default MenuPage;
