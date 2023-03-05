import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Drawer } from '@mui/material';

import SearchForm from './SearchForm';

import { GroupContext } from '../../context/groupContext';
import { blueGrey } from '@mui/material/colors';

function NavDrawer() {
    const { setDrawerOpen, drawerOpen, handleClickOpenForm } =
        useContext(GroupContext);

    return (
        <Drawer
            anchor={"bottom"}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
        >
            <Box sx={{ direction: "ltr", p: 2, bgcolor: blueGrey[700] }}>
                <SearchForm />

                <NavLink
                    to="/search"
                    style={{
                        display: "block",
                        textDecoration: "none",
                        textAlign: "center",
                        marginTop: 15,
                        color: 'white'
                    }}
                    onClick={() => setDrawerOpen(false)}
                >
                    لیست گروه ها
                </NavLink>
                <NavLink
                    style={{
                        display: "block",
                        textDecoration: "none",
                        textAlign: "center",
                        marginTop: 15,
                        color: 'white'
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
    )
}

export default NavDrawer