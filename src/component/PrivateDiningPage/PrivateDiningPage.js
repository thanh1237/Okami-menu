import React from "react";
import "./PrivateDiningPage.css";
import RoomPage from "component/PrivateDiningPage/RoomPage/RoomPage";
const PrivateDiningPage = () => {
    const rooms = [
        {
            id: 1,
            name: "Chef’s Table",
            description:
                "The focal point of the Kouzina is the Chef’s Table.  It is a beautiful 20 foot long hand-carved wooden table that can accommodate up to 20 people.  This space is ideal for celebrations, special family events and casual business functions that do not require a completely private space.",
            imgSrc: "room1.jpg",
        },
        {
            id: 2,
            name: "OENOS ROOM",
            description:
                "Adjacent to the Kouzina is the Oenos or “wine” room.  This is one of Kokkari’s two private dining rooms.  This room features large windows that look out on to Jackson Street and a dramatic wall of wine racks that spans floor to ceiling.  The large, wood-framed, sliding glass doors that separate the Oenos Room from the main dining area allow guests to feel part of the restaurant while still being in a private space.  This room can accommodate 30 people.",
            imgSrc: "room2.jpg",
        },
        {
            id: 3,
            name: "HANIA",
            description:
                "This unique private dining room is located downstairs and is completely separate from the main dining area.  The room has the feel of a wine cellar with warm wood accents and rich, tapestry carpets.  It features a rectangular polished wood table that accommodates up to 10 people comfortably.  The Hania Room is ideal for small business meetings and intimate family functions.",
            imgSrc: "room3.jpg",
        },
    ];

    return (
        <div id="private">
            <div className="title">Private Dining and Special Events</div>
            {rooms.map((room) => {
                return <RoomPage room={room} />;
            })}
            <div className="information">
                <div className="information-title">Further Group Dining Information</div>
                <div className="sub-title">
                    For group dining options, room minimums and availability, please contact our Event Manager, Melissa
                    Lopez.
                </div>
                <div className="contact">
                    Phone: <span style={{ color: "#a37a3d" }}>415.981.0983</span>
                </div>
                <div className="contact">
                    Email: <span style={{ color: "#a37a3d" }}>events@kokkari.com</span>
                </div>
                <div className="contact" style={{ marginTop: "15px" }}>
                    Download: <span style={{ color: "#a37a3d" }}>Private Dining Packet or Lunch Event Packet</span>
                </div>
            </div>
        </div>
    );
};

export default PrivateDiningPage;
