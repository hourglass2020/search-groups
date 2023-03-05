import React from "react";

import Grid from '@mui/material/Unstable_Grid2';

import LandingHeader from "./LandingHeader";
import LandingGroups from "./LandingGroups";
import LandingSearch from "./LandingSearch";

function LandingPage() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <Grid container spacing={3} sx={{
                height: {
                    md: "80vh"
                }
            }} justifyContent="center" alignItems={'center'}>
                <Grid xs={12} md={6}>
                    <LandingHeader />
                </Grid>
                <Grid xs={12} md={6}>
                    <LandingSearch />
                    <LandingGroups />
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingPage;
