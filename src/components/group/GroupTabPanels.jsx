import React from 'react'
import { Box } from "@mui/material";

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

function GroupTabPanels({ tabNumber, group, comments, handleSubmitCommentForm }) {
    return (
        <>
            <TabPanel value={tabNumber} index={0} dir={theme.direction}>
                <p dangerouslySetInnerHTML={{ __html: group.description }}></p>
            </TabPanel>
            <TabPanel value={tabNumber} index={1} dir={theme.direction}>
                <GroupComments
                    comments={comments}
                    handleSubmitCommentForm={handleSubmitCommentForm}
                />
            </TabPanel>
        </>
    )
}

export default GroupTabPanels