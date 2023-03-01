import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import { Outlet } from 'react-router-dom'

import HeaderNav from '../components/navs/HeaderNav'

import { theme } from "../components/ui/theme";
import { Button } from "@mui/material";

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})

function MainLayout() {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>گروه یاب</title>
                    </Helmet>
                    <HeaderNav />
                    <main className='container'>
                        <Outlet />
                    </main>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout