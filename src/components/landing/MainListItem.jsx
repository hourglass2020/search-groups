import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import { stripTags } from "../../services/helpers";

function MainListItem({ id, name, image, description }) {
    return (
        <div className="d-flex justify-content-between align-items-center main-list-item w-100">
            <div className="d-flex align-items-center">
                <img
                    src={image ? image : "/images/telegram.png"}
                    alt={"logo"}
                    height={50}
                    style={{ marginLeft: 10, borderRadius: '50%' }}
                />
                <div>
                    <Link
                        to={`/group/${id}`}
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <h6>{name}</h6>
                    </Link>
                    <p>{stripTags(description)}</p>
                </div>
            </div>
            <Link to={`/group/${id}`}>
                <IconButton>
                    <ArrowLeftIcon fontSize="large" color="inherit" />
                </IconButton>
            </Link>
        </div>
    );
}

export default MainListItem;
