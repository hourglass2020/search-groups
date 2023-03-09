import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { stripTags } from "../../services/helpers";

function MainListItem({ id, name, image, description }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", my: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                    src={image ? image : "/images/telegram.png"}
                    alt={"logo"}
                    height={50}
                    style={{ marginLeft: 10, borderRadius: "50%" }}
                />
                <div>
                    <Link
                        to={`/group/${id}`}
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <Typography component={"h6"} variant={"h6"} fontWeight="bold">
                            {name}
                        </Typography>
                    </Link>
                    <Typography component={"p"} variant="body2">
                        {stripTags(description)}
                    </Typography>
                </div>
            </Box>
        </Box>
    );
}

export default MainListItem;
