import { isEmpty } from "lodash";
import {
    Box,
    Divider,
    Typography,
} from "@mui/material";

import GroupComment from "./GroupComment";
import AddComment from "./AddComment";

function GroupComments({ comments, handleSubmitCommentForm }) {

    /*     const comments = [
            {
                name: "پوریا اقدم پور",
                message: 'salam',
                createdAt: '22-11-2022'
            }
        ] */

    return (
        <Box sx={{ my: 2 }}>
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
        </Box>
    );
}

export default GroupComments;
