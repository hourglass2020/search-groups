import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

function LandingHeader() {
    return (
        <Grid
            container
            sx={{ my: 5 }}
            justifyContent="center"
            alignItems={"center"}
            direction="column"
        >
            <img src="/images/logo.png" alt="logo" height={130} />
            <Typography textAlign={"center"} variant="h3" component={"h1"}>
                گروه یاب
            </Typography>
            <Typography
                component={"h5"}
                variant="h5"
                textAlign="center"
                sx={{ mt: 3 }}
            >
                سایت جست و جو و یافتن گروه های تکنولوژی در تلگرام
            </Typography>
        </Grid>
    );
}

export default LandingHeader;
