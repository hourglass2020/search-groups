import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import SearchForm from "../navs/SearchForm";

function SearchHeader() {
    return (
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
    )
}

export default SearchHeader