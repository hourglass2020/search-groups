import React from "react";

import Grid from '@mui/material/Unstable_Grid2';
import { Box } from "@mui/material";

import LandingHeader from "./LandingHeader";
import LandingGroups from "./LandingGroups";
import LandingSearch from "./LandingSearch";

function LandingPage() {
    return (
        <Grid container spacing={3} sx={{
            height: {
                xs: '60vh',
                md: "80vh"
            }
        }} justifyContent="center" alignItems={'center'}>
            <Grid xs={12} md={6}>
                <LandingHeader />
            </Grid>
            <Grid xs={12} md={6}>
                <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <LandingSearch />
                    <LandingGroups />
                </Box>
            </Grid>
        </Grid>
    );
}

export default LandingPage;
