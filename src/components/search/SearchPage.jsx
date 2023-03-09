import React, { useContext } from "react";
import { isEmpty } from "lodash";

import {
    Chip,
    Divider,
    List,
    ListItem,
    Pagination,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import MainListItem from "../landing/MainListItem";
import CategoriesColumn from "./CategoriesColumn";
import SearchForm from "../navs/SearchForm";

import { GroupContext } from "./../../context/groupContext";

function SearchPage() {
    const {
        filteredGroups,
        tags,
        selectedTags,
        setSelectedTags,
        handleSelect,
        setPageCount,
        pageCount,
    } = useContext(GroupContext);

    return (
        <Grid container sx={{ my: 10 }} spacing={3}>
            <Grid xs={12} md={3} sx={{ mt: 3 }}>
                <CategoriesColumn
                    tags={tags}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    handleSelect={handleSelect}
                />
            </Grid>
            <Grid xs={12} md={9} container direction={"column"} alignItems="center">
                <Grid container sx={{ mt: { md: 3 }, width: "100%" }} direction="row">
                    <Grid xs={12} sm={5}>
                        <Typography component="h2" variant="h4">
                            جست و جو کنید:
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={7}>
                        <SearchForm />
                    </Grid>
                </Grid>
                {!isEmpty(selectedTags) ? (
                    <Grid
                        container
                        spacing={1}
                        sx={{ mt: 2, marginInlineStart: 3, width: "100%" }}
                    >
                        {selectedTags.map((tag) => (
                            <Grid key={`chip${tag.slug}`}>
                                <Chip
                                    label={tag.name}
                                    sx={{ bgcolor: tag.color, color: "white" }}
                                    onDelete={() => handleSelect(false, tag)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : null}
                <List sx={{ width: "100%" }}>
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
                {isEmpty(filteredGroups) ? null : (
                    <Pagination
                        sx={{ my: 4 }}
                        count={4}
                        page={pageCount}
                        onChange={(event, value) => setPageCount(value)}
                        color="primary"
                    />
                )}
            </Grid>
        </Grid>
    );
}

export default SearchPage;
