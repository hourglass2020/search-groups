import Grid from "@mui/material/Unstable_Grid2";
import {
    Typography,
} from "@mui/material";

import SearchForm from './../navs/SearchForm';

function LandingSearch() {
    return (
        <Grid container sx={{ p: 0, mt: { md: 3 }, width: "100%" }} justifyContent="center" alignItems={'center'}>
            <Grid xs={12}>
                <Typography component="h2" variant="h4" textAlign={'center'}>
                    جست و جو کنید:
                </Typography>
            </Grid>
            <Grid xs={12}>
                <SearchForm />
            </Grid>
        </Grid>
    )
}

export default LandingSearch