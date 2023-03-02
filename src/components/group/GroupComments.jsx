import React from "react";
import GroupComment from "./GroupComment";
import { isEmpty } from "lodash";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, TextField } from "@mui/material";
import { Divider } from "@mui/material";

function GroupComments({ comments }) {
    return (
        <div>
            <section>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <TextField
                            label="نام و نام خانوادگی"
                            variant="outlined"
                            type={"text"}
                            fullWidth
                        />
                    </Grid>
                    <Grid xs={6}>
                        <TextField label="ایمیل" type={"email"} variant="outlined" fullWidth />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            label="نظر شما"
                            variant="outlined"
                            multiline
                            rows={3}
                            fullWidth
                        />
                    </Grid>
                    <Button variant="contained" fullWidth sx={{ mx: 1 }}>ثبت نظر</Button>
                </Grid>
            </section>
            <Divider sx={{ my: 3 }} />
            {isEmpty(comments) ? (
                <h6>نظری وجود ندارد، شما اولین باشید.</h6>
            ) : (
                comments.map((comment) => <GroupComment comment={comment} />)
            )}
        </div>
    );
}

export default GroupComments;
