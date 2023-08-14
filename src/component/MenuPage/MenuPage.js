import React from "react";
import "./MenuPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MenuPage = (props) => {
    const { category, handleChangeCarousel, navSelected } = props;

    return (
        <div id="menu-page">
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
                        <div key={idx} className="item-container">
                            <img src={`${item.imgUrl}`} alt={`cocktail-${idx}`} />

                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default MenuPage;
