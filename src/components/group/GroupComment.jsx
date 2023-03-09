import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { formatDate } from "../../services/helpers";
import commentIcon from "../../assets/images/comment.svg";

function GroupComment({ comment }) {
    return (
        <Card sx={{ my: 2, py: 2, px: 3 }}>
            <Grid alignItems={"center"} sx={{ p: 0 }} container>
                <img src={commentIcon} alt="comment" height={30} />
                <Grid alignItems={"baseline"} container>
                    <Typography component={"h6"} sx={{ mt: 1, mx: 1 }}>
                        {comment.name}
                    </Typography>
                    <span>|</span>
                    <Typography component={"h6"} sx={{ mt: 1, mx: 1, fontSize: 13 }}>
                        {formatDate(comment.created_at)}
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ mt: 3 }}>
                <Typography component={"p"}>{comment.message}</Typography>
            </Box>
        </Card>
    );
}

export default GroupComment;
