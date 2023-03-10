import { useContext } from "react";
import { isEmpty } from "lodash";

import { Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { GroupContext } from "../../context/groupContext";

function SearchTags() {
    const {
        selectedTags,
    } = useContext(GroupContext);

    return (
        <>
            {!isEmpty(selectedTags) ? (
                <Grid
                    container
                    spacing={1}
                    sx={{ mt: 2, marginInlineStart: 3, width: "100%" }}
                >
                    {selectedTags.map((tag) => (
                        <Grid key={`chip${tag.slug}`}>
                            <Chip
                                label={tag.name}
                                sx={{ bgcolor: tag.color, color: "white" }}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : null}
        </>
    );
}

export default SearchTags;
