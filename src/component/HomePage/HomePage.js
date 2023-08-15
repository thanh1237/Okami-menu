import React from "react";
import "./HomePage.css";
import { useState } from "react";
import WelcomePage from "component/WelcomePage/WelcomePage";
import MenuPage from "component/MenuPage/MenuPage";
const cocktails = [
    {
        name: "1",
        desc: "desc",
        imgUrl: "/cocktail1.png",
        ingre: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
        taste: "sweet",
        ml: "330ml",
        price: "70.000",
        type: "High Drink",
    },
    {
        name: "2",
        desc: "desc",
        imgUrl: "/cocktail2.png",
        ingre: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
        taste: "sweet",
        ml: "330ml",
        price: "70.000",
        type: "High Drink",
    },
    {
        name: "3",
        desc: "desc",
        imgUrl: "/cocktail3.png",
        ingre: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
        taste: "sweet",
        ml: "330ml",
        price: "70.000",
        type: "High Drink",
    },
    {
        name: "4",
        desc: "desc",
        imgUrl: "/cocktail4.png",
        ingre: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
        taste: "sweet",
        ml: "330ml",
        price: "70.000",
        type: "High Drink",
    },
];
const whiskey = [
    {
        name: "1",
        desc: "desc",
        imgUrl: "/whiskey1.jpg",
        ingre: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
    },
    {
        name: "2",
        desc: "desc",
        imgUrl: "/whiskey2.jpg",
        ingre: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
    },
    {
        name: "3",
        desc: "desc",
        imgUrl: "/whiskey3.jpg",
        ingre: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
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
    const [category, setCategory] = useState(cocktails);
    const [navSelected, setNavSelected] = useState(0);

    const handleChangeCarousel = (selectedIndex) => {
        console.log(selectedIndex);
        setNavSelected(selectedIndex);
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
            {/* <PublicNavbar handleChangeCarousel={handleChangeCarousel} /> */}
            <div id="home">
                <WelcomePage />
                <MenuPage category={category} handleChangeCarousel={handleChangeCarousel} navSelected={navSelected} />
            </div>
        </>
    );
}

export default HomePage;
