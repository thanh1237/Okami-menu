import React from "react";
import "./ReservationPage.css";
import { Row, Col, Image } from "react-bootstrap";
const ReservationPage = () => {
    return (
        <div id="reservation">
            <div className="info">
                <div className="title">Reservations</div>
                <div className="info-body">
                    <Row
                        className="justify-content-md-center"
                        style={{ marginRight: 0, minHeight: "300px", width: "100%" }}
                    >
                        <Col sm={12} lg={6}>
                            <div className="divider" />
                            <div className="divider" />
                            <p style={{ marginTop: "25px" }}>
                                KOKKARI ESTIATORIO accepts reservations up to two months in advance to the calendar
                                date.
                            </p>
                            <p>To reserve a table, please call 415.981.0983.</p>
                            <p>
                                Online reservations are 30 days in advance only. Make an online reservation through
                                OpenTable
                            </p>
                            <p>We do not take reservations via email.</p>
                            <h2 className="hours-operation">Hours of Operation</h2>
                            <h3 className="hours-operation">Lunch</h3>
                            <p className="time">Mon-Fri 11:30am to 2:30pm</p>
                            <h3 className="hours-operation">Dinner</h3>
                            <p className="time">Monday-Sunday 5:00pm – 10:00pm</p>
                            <h3 className="hours-operation">Corkage</h3>
                            <p className="time">$30 per 750ml bottle for up to 2 bottles, $50 per additional bottle</p>
                        </Col>
                        <Col sm={12} lg={6}>
                            <Image
                                style={{ width: "100%", maxHeight: "auto", objectFit: "cover" }}
                                src="door.jpg"
                                fluid
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default ReservationPage;
