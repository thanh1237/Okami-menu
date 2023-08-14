import React from "react";
import "./HomePage.css";
import { useState } from "react";
import WelcomePage from "component/WelcomePage/WelcomePage";
import MenuPage from "component/MenuPage/MenuPage";
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
            <>
                <WelcomePage />
                <MenuPage category={category} handleChangeCarousel={handleChangeCarousel} navSelected={navSelected} />
            </>
        </>
    );
}

export default HomePage;
