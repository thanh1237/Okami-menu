import React from "react";
import "./WelcomePage.css";
const WelcomePage = (props) => {
    const { handleChangeCarousel } = props;
    return (
        <section id="welcome">
            <div class="welcome container">
                <div>
                    <h1>
                        Welcome to <span></span>
                    </h1>
                    <h1>
                        Okami<span></span>
                    </h1>
                </div>
            </div>
            <div className="category">
                <span>Please choose from the list below:</span>
                <button class="cta cocktail" onClick={() => handleChangeCarousel(0)}>
                    Cocktail
                </button>
                <button class="cta whiskey" onClick={() => handleChangeCarousel(1)}>
                    Whiskey
                </button>
                <button class="cta food" onClick={() => handleChangeCarousel(2)}>
                    Food
                </button>
            </div>
        </section>
    );
};

export default WelcomePage;
