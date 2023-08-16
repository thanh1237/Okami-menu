import React, { useEffect } from "react";
import "./HomePage.css";
import { useState } from "react";
import WelcomePage from "component/WelcomePage/WelcomePage";
import MenuPage from "component/MenuPage/MenuPage";
import { ClipLoader } from "react-spinners";
import items from "constants/items";

const cocktails = items.cocktails;
const whiskey = items.whiskey;
const food = items.food;

function HomePage() {
    const [category, setCategory] = useState(cocktails);
    const [navSelected, setNavSelected] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleChangeCarousel = (selectedIndex) => {
        setNavSelected(selectedIndex);
        if (selectedIndex === 0) {
            setCategory(cocktails);
        } else if (selectedIndex === 1) {
            setCategory(whiskey);
        } else {
            setCategory(food);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(false);
        }, 3500);
        return () => clearInterval(interval);
    }, [loading]);

    return (
        <>
            {loading ? (
                <div className="loading-wrapper">
                    <ClipLoader color="red" size={150} loading={loading} />
                </div>
            ) : (
                <div id="home">
                    <WelcomePage />
                    <MenuPage
                        category={category}
                        handleChangeCarousel={handleChangeCarousel}
                        navSelected={navSelected}
                    />
                </div>
            )}
        </>
    );
}

export default HomePage;
