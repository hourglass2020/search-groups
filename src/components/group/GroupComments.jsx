import { isEmpty } from "lodash";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Divider, Button, TextField, Paper } from "@mui/material";

import GroupComment from "./GroupComment";

function GroupComments({ comments, handleSubmitCommentForm }) {
    return (
        <div>
            <Paper>
                <Box component={"form"} onSubmit={handleSubmitCommentForm} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={6}>
                            <TextField
                                label="نام و نام خانوادگی"
                                variant="outlined"
                                name="fullname"
                                type={"text"}
                                required
                                helperText="نام و نام خانوادگی الزامی میباشد."
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} md={6}>
                            <TextField
                                label="ایمیل"
                                required
                                helperText="ورود ایمیل الزامی میباشد."
                                name="email"
                                type={"email"}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                name="message"
                                label="نظر شما"
                                variant="outlined"
                                multiline
                                required
                                rows={3}
                                fullWidth
                            />
                        </Grid>
                        <Button variant="contained" type="submit" fullWidth sx={{ mx: 1 }}>
                            ثبت نظر
                        </Button>
                    </Grid>
                </Box>
            </Paper>
            <Divider sx={{ my: 2 }} />
            {isEmpty(comments) ? (
                <h6>نظری وجود ندارد، شما اولین باشید.</h6>
            ) : (
                comments.map((comment) => (
                    <article key={`comment${Math.floor(Math.random() * 100000)}`}>
                        <GroupComment comment={comment} />
                    </article>
                ))
            )}
        </div>
    );
}

export default GroupComments;
