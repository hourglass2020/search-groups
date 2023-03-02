import React, { useState, useContext } from "react";
import { isEmpty } from "lodash";

import {
    Chip,
    Divider,
    List,
    ListItem,
    Pagination,
    Stack,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import MainListItem from "../landing/MainListItem";
import CategoriesColumn from "./CategoriesColumn";
import SearchForm from "../navs/SearchForm";

import { GroupContext } from "./../../context/groupContext";

function SearchPage() {
    const { filteredGroups, tags, selectedTags, setSelectedTags } =
        useContext(GroupContext);

    const handleSelect = (checked, tag) => {
        if (checked === true) {
            setSelectedTags([...selectedTags, tag]);
        } else {
            const filteredTags = selectedTags.filter((t) => t.slug !== tag.slug);
            setSelectedTags(filteredTags);
        }
    };


    return (
        <div className="row mb-5">
            <div className="col-12 col-md-3 mt-5">
                <CategoriesColumn
                    tags={tags}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    handleSelect={handleSelect}
                />
            </div>
            <div className="col-12 col-md-9 mt-4 d-flex flex-column align-items-center">
                <div className="w-100 row mt-md-3">
                    <h2 className="col-sm-5 col-12">جست و جو کنید:</h2>
                    <div className="col-sm-7 col-12">
                        <SearchForm />
                    </div>
                </div>
                <Grid
                    container
                    className="w-100"
                    spacing={1}
                    sx={{ mt: 2, marginInlineStart: 3 }}
                >
                    {selectedTags.map((tag) => (
                        <Grid>
                            <Chip
                                label={tag.name}
                                sx={{ bgcolor: tag.color, color: "white" }}
                                onDelete={() => handleSelect(false, tag)}
                            />
                        </Grid>
                    ))}
                </Grid>
                <div className="mt-4 w-100">
                    <List className="main-list">
                        {filteredGroups.map((group) => (
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
                </div>
                {isEmpty(filteredGroups) ? null : (
                    <Pagination sx={{ mt: 4 }} count={4} color="primary" />
                )}
            </div>
        </div>
    );
}

export default SearchPage;
