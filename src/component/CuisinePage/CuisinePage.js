import React from "react";
import "./CuisinePage.css";
import { Col, Image, Row } from "react-bootstrap";
import CardItemPage from "component/CuisinePage/CardItemPage/CardItemPage";
const CuisinePage = () => {
    const cuisines = [
        {
            id: 1,
            title: "Olive Oil For Aroma And Body",
            description:
                "Olive oil is more than just a cooking medium in the Kokkari kitchen. Its the foundation on which almost every savory dish rests. Used liberally, olive oil adds a silky body and lush richness to braised dishes and greens. ",
            imgSrc: "cuisine1.jpg",
        },
        {
            id: 2,
            title: "Tomatoes And Other Sweet Notes",
            description:
                "Tomato sauce cloaks ground lamb in moussaka, ground beef in pastitsio, and adds sweetness to savory dishes. Green beans, zucchini, artichokes, fava beans and okra are routinely stewed with tomatoes. ",
            imgSrc: "cuisine2.jpg",
        },
        {
            id: 3,
            title: "Lemons And Other Tangy Flavors",
            description:
                "Seafood requires lemon and our roasted meats are basted with lemon juice as its natural sugar helps the surface brown and crisp. Wine vinegar steps in with bolder tartness and yogurt supplies the acidity to marinades, dips like tzatziki, and simple sauces. ",
            imgSrc: "cuisine3.jpg",
        },
        {
            id: 4,
            title: "Oregano and Other Aromatics",
            description:
                "Fresh herbs are everywhere in Greek cooking. We season braised rabbit with cinnamon, allspice, nutmeg, and cloves. We add cumin to meatballs and tripe. Our kitchen couldn’t function without dried oregano to scent roast chicken, tomato sauce, and summer vegetable stews. ",
            imgSrc: "cuisine4.jpg",
        },
        {
            id: 5,
            title: "Greens From The Field And Farm",
            description:
                "From peppery dandelions and mustard to cultivated spinach, beet greens, and chard, we savor wild greens for fillings and preparation of horta, or cooked seasonal greens.",
            imgSrc: "cuisine5.jpg",
        },
        {
            id: 6,
            title: "Feta And Other Salty Elements",
            description:
                "Feta’s briny tang and creamy texture give many dishes their Greek personality. We rely on manouri when we want a milder cheese or myzithra as a firm option, yet feta is the cheese we sprinkle on roasted asparagus and peppers, blend with chiles for a spicy spread, and crumble over chilled watermelon.",
            imgSrc: "cuisine6.jpg",
        },
        {
            id: 7,
            title: "Seafood",
            description:
                "Whole fish, sardines glistening, octopus plump and meaty; Grilled, fried or baked plaki style with tomato? Fish tastes better when cooked on the bone, and we’re happy to bring a selection to the table when asked as we know many of our guests want to look the whole fish right in the eye. ",
            imgSrc: "cuisine7.jpg",
        },
        {
            id: 8,
            title: "Lamb, The Favored Meat",
            description:
                "We’ve worked hard to find a source of lamb comparable to the mild lamb served in Greece. Our dry-aged  whole lamb comes from a single source who deliverers to us personally. Whole lambs come with bonus parts; spit roasted or skewered innards that Greek diners adore. ",
            imgSrc: "cuisine8.jpg",
        },
    ];

    return (
        <div id="cuisine">
            <div className="kouzina">
                <div className="title">Kouzina — κουζίνα</div>
                <div className="info">
                    <Row
                        className="justify-content-md-center"
                        style={{ marginRight: 0, minHeight: "300px", width: "100%" }}
                    >
                        <Col sm={12} lg={8}>
                            <div className="divider" />
                            <div className="divider" />
                            <p>
                                At Kokkari Estiatorio, we are driven by the concept of philoxenia, the art of making a
                                stranger a friend. This philosophy drives our efforts to create a cuisine fit for the
                                gods with the hospitality of a proper Greek home — a restaurant that you would never
                                want to leave
                            </p>
                            <p>
                                Named after a small fishing village on the island of Samos in the Aegean Sea, Kokkari is
                                the sister restaurant to acclaimed Evvia Estiatorio in Palo Alto, California.
                            </p>
                            <p>
                                Legendary Kokkari is the site where Orion, son of the Greek god Poseidon, fell in love
                                with the daughter of the King of Chios. For her love, Orion foraged the island for wild
                                game and seafood to prepare elaborate banquets: Cuisine fit for the gods.
                            </p>
                            <p>
                                On entering Kokkari, guests experience the old-world charm of a rustic Mediterranean
                                country inn. An inviting fireplace, extensive woodwork, hand-made pottery and freshly
                                picked flowers all reflect the warmth and tradition of ages-old hospitality.
                            </p>
                        </Col>
                        <Col sm={12} lg={4}>
                            <Image
                                style={{ width: "100%", maxHeight: "auto", objectFit: "cover" }}
                                src="about1.jpg"
                                fluid
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            <Row className="catalog">
                {cuisines.map((cuisine) => {
                    return (
                        <Col sm={12} lg={6} key={cuisine.id}>
                            <CardItemPage cuisine={cuisine} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default CuisinePage;
