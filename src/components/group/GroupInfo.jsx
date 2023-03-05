import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Chip } from "@mui/material";
import { isEmpty } from "lodash";

function GroupInfo({ group }) {
    return (
        <div>
            <Grid container justifyContent={"start"} alignItems={'center'} >
                <Grid xs={3} container justifyContent={"center"}>
                    <img src="/images/telegram.png" alt="telegram" style={{ width: "100%", minWidth: 100 }} />
                </Grid>
                <Grid xs={9}>
                    <h3>{group.name}</h3>
                    <Grid
                        container
                        className="w-100"
                        spacing={1}
                    >
                        {!isEmpty(group) &&
                            group.tags.map((tag) => (
                                <Grid key={`chip${tag.slug}`}>
                                    <Chip
                                        label={tag.name}
                                        sx={{ bgcolor: tag.color, color: "white" }}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2 }} direction={"row"}>
                <Grid xs={6}>
                    <a href={group.link} target="_blank">
                        <Button variant="contained" color="secondary" fullWidth>
                            لینک کانال
                        </Button>
                    </a>
                </Grid>
                <Grid xs={6}>
                    <a href={group.admin ? group.admin : "#"} target="_blank">
                        <Button variant="contained" color="success" fullWidth>
                            ادمین کانال
                        </Button>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}

export default GroupInfo;
