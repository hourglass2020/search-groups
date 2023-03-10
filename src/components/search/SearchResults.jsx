import { useContext } from "react";
import { Divider, List, ListItem } from "@mui/material";

import MainListItem from "../landing/MainListItem";

import { GroupContext } from "../../context/groupContext";

function SearchResults() {
    const {
        groups,
    } = useContext(GroupContext);

    return (
        <List sx={{ width: "100%" }}>
            {groups.map((group) => (
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
    );
}

export default SearchResults;
