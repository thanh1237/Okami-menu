import React, { memo } from "react";
import "./HomePage.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PublicNavbar from "shared/PublicNavbar";
import WelcomePage from "component/WelcomePage/WelcomePage";
const cocktails = [
    {
        name: "1",
        desc: "desc",
        imgUrl: "/cocktail1.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
    {
        name: "2",
        desc: "desc",
        imgUrl: "/cocktail2.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
    {
        name: "3",
        desc: "desc",
        imgUrl: "/cocktail3.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
    {
        name: "4",
        desc: "desc",
        imgUrl: "/cocktail4.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
    {
        name: "5",
        desc: "desc",
        imgUrl: "/cocktail5.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
    {
        name: "6",
        desc: "desc",
        imgUrl: "/cocktail6.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
];
const whiskey = [
    {
        name: "1",
        desc: "desc",
        imgUrl: "/whiskey1.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
    {
        name: "2",
        desc: "desc",
        imgUrl: "/whiskey2.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
    {
        name: "3",
        desc: "desc",
        imgUrl: "/whiskey3.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
];
const food = [
    {
        name: "1",
        desc: "desc",
        imgUrl: "/whiskey1.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
    {
        name: "2",
        desc: "desc",
        imgUrl: "/whiskey2.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
    {
        name: "3",
        desc: "desc",
        imgUrl: "/whiskey3.jpg",
        ingre: [1, 2, 3, 4, 5, 6],
    },
];
function HomePage() {
    const [category, setCategory] = useState(null);

    const handleChangeCarousel = (selectedIndex) => {
        if (selectedIndex === 0) {
            setCategory(cocktails);
        } else if (selectedIndex === 1) {
            setCategory(whiskey);
        } else {
            setCategory(food);
        }
    };

    return (
        <>
            {category ? (
                <>
                    <PublicNavbar handleChangeCarousel={handleChangeCarousel} />
                    <Carousel className="carousel-container">
                        {category.map((item, idx) => {
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
            ) : (
                <WelcomePage handleChangeCarousel={handleChangeCarousel} />
            )}
        </>
    );
}

export default memo(HomePage);
