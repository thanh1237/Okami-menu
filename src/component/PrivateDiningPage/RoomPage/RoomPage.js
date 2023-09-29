import React from "react";
import "./RoomPage.css";
import { Col, Image, Row } from "react-bootstrap";
const RoomPage = (props) => {
    const { room } = props;
    return (
        <div id="room">
            <div className="title">{room.name}</div>
            <Row className="justify-content-md-center" style={{ marginRight: 0, minHeight: "300px", width: "100%" }}>
                <Col sm={12} lg={6}>
                    <div className="divider" />
                    <div className="divider" />
                    <div>{room.description}</div>
                </Col>
                <Col sm={12} lg={6}>
                    <Image style={{ width: "100%", maxHeight: "auto", objectFit: "cover" }} src={room.imgSrc} fluid />
                </Col>
            </Row>
        </div>
    );
};

export default RoomPage;
