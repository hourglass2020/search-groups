import { useState } from "react";
import { Box } from "@mui/material";

import GroupTabPanels from "./GroupTabPanels";
import GroupTabs from "./GroupTabs";

function GroupMoreInfo({ group, comments, handleSubmitCommentForm }) {
    const [tabNumber, setTabNumber] = useState(0);

    const handleChangeTabs = (event, newTabNumber) => {
        setTabNumber(newTabNumber);
    };

    return (
        <Box sx={{ mt: 3 }}>
            <GroupTabs
                tabNumber={tabNumber}
                handleChangeTabs={handleChangeTabs} />
            <GroupTabPanels
                tabNumber={tabNumber}
                comments={comments}
                group={group}
                handleSubmitCommentForm={handleSubmitCommentForm}
            />
        </Box>
    );
}

export default GroupMoreInfo;