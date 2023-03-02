import { Paper } from "@mui/material";
import React from "react";
import { formatDate } from "../../services/jalali";

function GroupComment({ comment }) {
    return (
        <Paper className="my-2 py-2 px-3">
            <div>
                <section className="d-flex align-items-center">
                    <img src="/images/comment.svg" alt="comment" height={30} />
                    <div className="d-flex align-items-baseline">
                        <h6 className="mt-2 mx-2">{comment.name}</h6>
                        <span>|</span>
                        <h6
                            className="mx-2 mt-2"
                            style={{
                                fontSize: 13,
                            }}
                        >
                            {formatDate(comment.created_at)}
                        </h6>
                    </div>
                </section>
                <section className="mt-2">
                    <p>{comment.message}</p>
                </section>
            </div>
        </Paper>
    );
}

export default GroupComment;
