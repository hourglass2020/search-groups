import React, { useState, useContext } from "react";
import { isEmpty } from "lodash";

import MainListItem from "../landing/MainListItem";
import CategoriesColumn from "./CategoriesColumn";

import { GroupContext } from './../../context/groupContext';
import SearchForm from "../navs/SearchForm";
import { Divider, List, ListItem, Pagination } from "@mui/material";

function SearchPage() {
    const { filteredGroups, tags, selectedTags, setSelectedTags } = useContext(GroupContext);

    return (
        <div className="row mb-5">
            <div className="col-12 col-md-3 mt-5">
                <CategoriesColumn tags={tags} />
            </div>
            <div
                className="col-12 col-md-9 mt-4 d-flex flex-column align-items-center"
            >
                <div className="w-100 row mt-md-3">
                    <h2 className="col-sm-5 col-12">جست و جو کنید:</h2>
                    <div className="col-sm-7 col-12">
                        <SearchForm />
                    </div>
                </div>
                <div className="mt-4 w-100">
                    <List
                        className="main-list"
                    >
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
                {isEmpty([filteredGroups]) ? null :
                    <Pagination sx={{ mt: 4 }} count={4} color="primary" />
                }
            </div>
        </div>
    );
}

export default SearchPage;
