import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { List, ListItem, Button, Divider } from "@mui/material";

import { GroupContext } from './../../context/groupContext';
import MainListItem from './MainListItem';

function LandingGroups() {
    const { filteredGroups } = useContext(GroupContext);

    return (
        <div className="mt-3 w-100" style={{ maxHeight: "100px" }}>
            <List
                variant="flush"
                style={{ maxHeight: "30vh" }}
                className="w-100 overflow-auto main-list"
            >
                {filteredGroups.slice(0, 3).map((group) => (
                    <>
                        <ListItem key={`group${group.slug}`} alignItems="flex-start">
                            <MainListItem
                                name={group.name}
                                description={group.description}
                                id={group.slug}
                                image={group.image}
                            />
                        </ListItem>
                        <Divider variant="middle" component={"li"} />
                    </>
                ))}
            </List>
            <Link to={"/search"} style={{ textDecoration: "none" }}>
                <Button
                    size="sm"
                    variant="contained"
                    className="mb-4 w-100 mt-3"
                >
                    مشاهده بیشتر
                </Button>
            </Link>
        </div>
    )
}

export default LandingGroups