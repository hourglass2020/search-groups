import React from "react";
import { Link } from "react-router-dom";
import { BsFillCaretLeftFill } from "react-icons/bs";

function MainListItem({ id, name, image, description }) {
    return (
        <div className="d-flex justify-content-between align-items-center main-list-item w-100">
            <div className="d-flex align-items-center">
                <img
                    src={/* image ? image : */ "/images/telegram.png"}
                    alt={"logo"}
                    height={50}
                />
                <div>
                    <Link to={`/group/${id}`} style={{ textDecoration: "none" }}>
                        <h6>{name}</h6>
                    </Link>
                    <p>{description}</p>
                </div>
            </div>
            <Link to={`/group/${id}`}>
                <div className="main-list-item-more">
                    <BsFillCaretLeftFill />
                </div>
            </Link>
        </div>
    );
}

export default MainListItem;
