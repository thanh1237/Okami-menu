import React from "react";
import "./AboutPage.css";
import { Col, Row, Image } from "react-bootstrap";

function AboutPage() {
    return (
        <div id="about">
            <div className="philoxenia">
                <div className="title">Philoxenia — φιλοξενια</div>
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
            <div className="divider" />
            <div className="divider" />
            <div className="kokkari">
                <Row
                    className="justify-content-md-center"
                    style={{ marginRight: 0, minHeight: "300px", width: "100%" }}
                >
                    <Col className="detail" sm={12} lg={5}>
                        <div className="board">
                            <div className="title">KOKKARI ESTIATORIO</div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div className="address">200 Jackson Street (at Front St.) San Francisco, CA 94111</div>
                                <div className="reservations">
                                    p: <span>415.981.0983 reservations & hours</span>
                                </div>
                                <div className="directions">directions via mobile map</div>
                            </div>
                        </div>
                        <div className="info">
                            <Row className="justify-content-md-center" style={{ marginRight: 0, width: "100%" }}>
                                <Col className="left">Managing Partner</Col>
                                <Col className="right">Paul Kirby</Col>
                            </Row>
                            <Row className="justify-content-md-center" style={{ marginRight: 0, width: "100%" }}>
                                <Col className="left">Chef/Partner</Col>
                                <Col className="right">Erik Cosselmon</Col>
                            </Row>
                            <Row className="justify-content-md-center" style={{ marginRight: 0, width: "100%" }}>
                                <Col className="left">General Manager</Col>
                                <Col className="right">William Boumier</Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} lg={7} className="about">
                        <p className="dropcapimg">
                            <Image
                                src="/kokkari.jpg"
                                style={{ height: "400px", display: "inline", float: "left", marginRight: "15px" }}
                            />
                        </p>
                        <p>
                            Paul Kirby Managing Partner “Running a restaurant is all about taking care of people,” says
                            Paul Kirby who has been at the helm of Kokkari Estiatorio since 2000. “From your staff to
                            each and every guest that comes into your establishment, it is important to make everyone
                            feel comfortable and welcome. Restaurant employees that are valued and respected take pride
                            in their work and truly enjoy their jobs. This translates directly to the guest experience.”
                            While Paul may be soft-spoken and charming (qualities he attributes to his Southern
                            upbringing), he is extremely driven. His dedicated, hands-on approach to management ensures
                            the high standards of service and hospitality at the restaurant have stayed consistent for
                            over 15 years. Under Kirby, Kokkari’s refreshing approach to service emphasizes the
                            emotional elements of hospitality: Have a good time and above all, make sure the guests have
                            a great time. Paul came to the West Coast after years managing waterfront restaurant
                            properties in The Hamptons outside of New York City. His first job in San Francisco was
                            working alongside acclaimed, Bay Area Chef, Reed Hearon as General Manager of Rose Pistola.
                            After three years with Hearon he came to Kokkari Estiatorio bringing with him a genuine
                            appreciation and knowledge of rustic Meditteranean cuisine and wines, an essential
                            prerequisite for working at Kokkari. In 2006 he was named Managing Partner of both Kokkari
                            and Evvia in Palo Alto.
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutPage;
