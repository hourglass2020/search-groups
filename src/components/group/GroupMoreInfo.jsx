import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Tab, Tabs } from "@mui/material";

import GroupComments from "./GroupComments";
import { theme } from "./../ui/theme";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ mt: 2 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

function GroupMoreInfo({ group, comments, handleSubmitCommentForm }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="mt-3">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${group.name} - ${global.name}`}</title>
            </Helmet>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="white"
                    variant="fullWidth"
                >
                    <Tab label="توضیحات" {...a11yProps(0)} />
                    <Tab label="نظرات" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <p dangerouslySetInnerHTML={{ __html: group.description }}></p>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <GroupComments
                    comments={comments}
                    handleSubmitCommentForm={handleSubmitCommentForm}
                />
            </TabPanel>
        </div>
    );
}

export default GroupMoreInfo;
