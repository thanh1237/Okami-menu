import React from "react";
import "./CardItem.css";
const CardItem = (props) => {
    const { item } = props;
    let itemImg = item.imgUrl;
    return (
        <div id="card-container">
            <div
                className="item-img"
                style={{
                    width: "30%",
                    maxHeight: "100%",
                    backgroundSize: "contain",
                    backgroundImage: `url(${itemImg})`,
                    float: "left",
                    backgroundColor: "transparent",
                    height: "12rem",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            ></div>
            <div className="item-info">
                <div className="info-header">
                    <div>{item.name}</div>
                    <div className="taste-ml">
                        <div>
                            <span style={{ color: "#9C9180" }}>Tasting Note:</span> {item.taste}
                        </div>
                        <div>{item.ml}</div>
                    </div>
                    <div>
                        {" "}
                        <span style={{ color: "#9C9180" }}>{`Type: `}</span>
                        <span>{item.type}</span>
                    </div>
                    <div>
                        {" "}
                        <span style={{ color: "#9C9180" }}>
                            <span>{"Ingredients: "}</span>
                            {item.ingre?.map((e, idx) => {
                                return (
                                    <span key={idx} style={{ color: "white" }}>
                                        {e}
                                        {idx !== item.ingre.length - 1 ? <span>{", "}</span> : ""}
                                    </span>
                                );
                            })}
                        </span>{" "}
                    </div>
                </div>
                <div className="info-footer">
                    <div>{item.price} VND</div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
