import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Chip } from '@mui/material';
import { isEmpty } from 'lodash';

function GroupInfo({ group }) {
    return (
        <div>
            <div className="d-flex justify-content-start align-items-center">
                <img
                    src="/images/telegram.png"
                    alt="telegram"
                    height={150}
                    width={150}
                />
                <div>
                    <h3>{group.name}</h3>
                    <div className="d-flex mt-4">
                        <a href={group.link} target="_blank">
                            <button className="btn btn-outline-success">لینک کانال</button>
                        </a>
                        <a href={group.admin ? group.admin : "#"} target="_blank">
                            <button className="btn btn-outline-primary me-2">
                                ادمین کانال
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Grid
                container
                className="w-100"
                spacing={1}
                sx={{ mt: 2, marginInlineStart: 3 }}
            >
                {!isEmpty(group) && group.tags.map((tag) => (
                    <Grid key={`chip${tag.slug}`}>
                        <Chip
                            label={tag.name}
                            sx={{ bgcolor: tag.color, color: "white" }}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default GroupInfo