import React from "react";
import "./MenuPage.css";
import { Carousel } from "react-bootstrap";

const MenuPage = (props) => {
    const { category, handleChangeCarousel, navSelected } = props;
    console.log("category", category);
    return (
        <>
            <div className="menuNav">
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
            <Carousel className="carousel-container">
                {category?.map((item, idx) => {
                    return (
                        <Carousel.Item key={idx} className="item-container">
                            <img src={`${item.imgUrl}`} alt={`cocktail-${idx}`} />
                            <Carousel.Caption>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </>
    );
};

export default MenuPage;
