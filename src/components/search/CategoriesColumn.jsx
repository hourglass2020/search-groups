import React, { useContext } from "react";
import { GroupContext } from "./../../context/groupContext";
import { includes } from "lodash";
import {
    Box,
    Checkbox,
    Divider,
    FormControlLabel,
    List,
    ListItem,
    Paper,
} from "@mui/material";

function CategoriesColumn({ tags }) {
    const { selectedTags, setSelectedTags } = useContext(GroupContext);

    const handleSelect = (event, tag) => {
        if (event.target.checked === true) {
            if (!includes(selectedTags, tag)) {
                setSelectedTags([...selectedTags, tag]);
            }
        } else {
            if (includes(selectedTags, tag)) {
                const filteredTags = selectedTags.filter((t) => t === tag.id);
                setSelectedTags(filteredTags);
            }
        }

        console.log(selectedTags);
    };

    return (
        <div>
            <h4>انتخاب گروه</h4>
            <Paper elevation={2}>
                <Box>
                    <List>
                        {tags.slice(0, 10).map((tag) => (
                            <div key={`tag${tag.slug}`}>
                                <ListItem >
                                    <FormControlLabel control={<Checkbox />} label={tag.name} />
                                </ListItem>
                                <Divider component={"li"} variant="middle" />
                            </div>
                        ))}
                    </List>
                </Box>
            </Paper>
        </div>
    );
}

export default CategoriesColumn;
