import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
    List,
    ListItem,
    Button,
    Divider,
    Typography,
    Box,
} from "@mui/material";

import MainListItem from "./MainListItem";
import { GroupContext } from "./../../context/groupContext";

function LandingGroups() {
    const { groups } = useContext(GroupContext);

    return (
        <Box className=" w-100">
            {groups.length === 0 ? (
                <Typography component={"h6"} sx={{ mt: 2 }}>
                    برای جست و جوی شما نتایجی وجود ندارد.
                </Typography>
            ) : (
                <List sx={{ minHeight: 100 }} className="w-100 main-list">
                    {groups.slice(0, 3).map((group) => (
                        <div key={`group${group.slug}`}>
                            <ListItem alignItems="flex-start">
                                <MainListItem
                                    name={group.name}
                                    description={group.description}
                                    id={group.slug}
                                    image={group.image}
                                />
                            </ListItem>
                            <Divider variant="middle" component={"li"} />
                        </div>
                    ))}
                </List>
            )}
            {groups.length > 3 ? (
                <Link to={"/search"} style={{ textDecoration: "none" }}>
                    <Button size="sm" variant="contained" sx={{ my: 4 }} fullWidth>
                        مشاهده بیشتر
                    </Button>
                </Link>
            ) : null}
        </Box>
    );
}

export default LandingGroups;
