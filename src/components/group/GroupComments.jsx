import { isEmpty } from "lodash";
import Grid from "@mui/material/Unstable_Grid2";
import {
    Box,
    Divider,
    Button,
    TextField,
    Paper,
    Typography,
} from "@mui/material";

import GroupComment from "./GroupComment";
import AddComment from "./AddComment";

function GroupComments({ comments, handleSubmitCommentForm }) {
    return (
        <div>
            <AddComment handleSubmitCommentForm={handleSubmitCommentForm} />
            <Divider sx={{ my: 2 }} />
            {isEmpty(comments) ? (
                <Typography component={"h6"} variant="body1">
                    نظری وجود ندارد، شما اولین باشید.
                </Typography>
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
