import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import { NavLink, Outlet } from "react-router-dom";

import HeaderNav from "../components/navs/HeaderNav";

import { theme } from "../components/ui/theme";
import { useContext } from "react";
import { GroupContext } from "./../context/groupContext";
import { Drawer, Box, Button } from "@mui/material";
import SearchForm from "../components/navs/SearchForm";

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

function MainLayout() {
    const { setDrawerOpen, drawerOpen, handleClickOpenForm } =
        useContext(GroupContext);

    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>گروه یاب</title>
                    </Helmet>
                    <HeaderNav />
                    <main className="container">
                        <Outlet />
                    </main>
                    <Drawer
                        anchor={"bottom"}
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        <Box sx={{ direction: "ltr", p: 2 }}>
                            <SearchForm />

                            <NavLink
                                to="/search"
                                style={{
                                    display: "block",
                                    textDecoration: "none",
                                    textAlign: "center",
                                    marginTop: 15,
                                }}
                            >
                                لیست گروه ها
                            </NavLink>
                            <NavLink
                                style={{
                                    display: "block",
                                    textDecoration: "none",
                                    textAlign: "center",
                                    marginTop: 15,
                                }}
                                onClick={() => {
                                    setDrawerOpen(false);
                                    handleClickOpenForm();
                                }}
                            >
                                افزودن گروه
                            </NavLink>
                        </Box>
                    </Drawer>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MainLayout;
