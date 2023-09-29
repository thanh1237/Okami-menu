import React from "react";
import "./CardItemPage.css";
import Card from "react-bootstrap/Card";

const CardItemPage = (props) => {
    const { cuisine } = props;

    return (
        <Card className="card-item">
            <Card.Img variant="top" src={cuisine.imgSrc} />
            <Card.Body>
                <Card.Title>{cuisine.title}</Card.Title>
                <Card.Text>{cuisine.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardItemPage;
