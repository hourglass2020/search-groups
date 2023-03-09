import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

function GroupTabs({ tabNumber, handleChangeTabs }) {
    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            "aria-controls": `full-width-tabpanel-${index}`,
        };
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
                value={tabNumber}
                onChange={handleChangeTabs}
                indicatorColor="primary"
                textColor="inherit"
                variant="fullWidth"
            >
                <Tab label="توضیحات" {...a11yProps(0)} />
                <Tab label="نظرات" {...a11yProps(1)} />
            </Tabs>
        </Box>
    );
}

export default GroupTabs;
