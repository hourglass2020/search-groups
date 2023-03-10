import Grid from "@mui/material/Unstable_Grid2";

import CategoriesColumn from "./CategoriesColumn";

import SearchPagination from "./SearchPagination";
import SearchResults from "./SearchResults";
import SearchTags from "./SearchTags";
import SearchHeader from "./SearchHeader";

function SearchPage() {
    return (
        <Grid container sx={{ my: 5 }} spacing={3}>
            <Grid xs={12} md={3} sx={{ mt: 3 }}>
                <CategoriesColumn />
            </Grid>
            <Grid xs={12} md={9} container direction={"column"} alignItems="center">
                <SearchHeader />
                <SearchTags />
                <SearchResults />
                <SearchPagination />
            </Grid>
        </Grid>
    );
}

export default SearchPage;
