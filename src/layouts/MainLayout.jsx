import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import HeaderNav from "../components/navs/HeaderNav";
import NavDrawer from './../components/navs/NavDrawer';

import { theme } from "../components/ui/theme";

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

function MainLayout() {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <Helmet>
                    <title>گروه یاب</title>
                </Helmet>
                <HeaderNav />
                <Container sx={{ mt: 7 }}>
                    <Outlet />
                </Container>
                <NavDrawer />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MainLayout;
