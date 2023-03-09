import { isEmpty } from "lodash";

import Grid from "@mui/material/Unstable_Grid2";
import { Button, Chip, Typography } from "@mui/material";
import { cyan, indigo } from "@mui/material/colors";

import telegram from "../../assets/images/telegram.png";

function GroupInfo({ group }) {
    return (
        <div>
            <Grid
                container
                justifyContent={"start"}
                alignItems={"center"}
                sx={{ mt: 2 }}
            >
                <Grid xs={3} container justifyContent={"start"} sx={{ p: 0 }}>
                    <img
                        src={group.image ? group.image : telegram}
                        alt="telegram"
                        style={{ width: "70%", borderRadius: "50%", minWidth: 50 }}
                    />
                </Grid>
                <Grid xs={9} container justifyContent={"start"} sx={{ p: 0 }}>
                    <Typography component={"h3"} variant="h4" textAlign={"start"}>{group.name}</Typography>
                    <Grid container sx={{ width: 1 }} spacing={1}>
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
            <Grid container direction={"row"} sx={{ p: 0, mt: 3 }}>
                <Grid xs={6}>
                    <a href={group.link} target="_blank">
                        <Button variant="contained" color="info" sx={{ bgcolor: indigo[900] }} fullWidth>
                            لینک کانال
                        </Button>
                    </a>
                </Grid>
                <Grid xs={6}>
                    <a href={group.admin ? group.admin : "#"} target="_blank">
                        <Button variant="contained" color="info" sx={{ bgcolor: cyan[900] }} fullWidth>
                            ادمین کانال
                        </Button>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}

export default GroupInfo;
