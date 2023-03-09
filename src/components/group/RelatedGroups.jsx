import { Link } from "react-router-dom";

import Grid from '@mui/material/Unstable_Grid2';
import {
    Card,
    CardHeader,
    Divider,
    Typography,
} from "@mui/material";

function RelatedGroups({ relatedGroups }) {
    return (
        <Card sx={{ color: "black", mt: 4, mb: 4 }}>
            <CardHeader
                title={
                    <Typography component="h4" variant="h6">
                        گروه های مرتبط
                    </Typography>
                }
            />
            <>
                {
                    relatedGroups.slice(0, 5).map((group) => (
                        <div key={group.slug}>
                            <Grid direction={"column"}>
                                <Link
                                    to={`/group/${group.slug}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    {group.name}
                                </Link>
                                <Typography variant="subtitle2">{group.description}</Typography>
                            </Grid>
                            <Divider variant="middle" sx={{ bgcolor: 'grey' }} />
                        </div>
                    ))
                }
            </>
        </Card >
    );
}

export default RelatedGroups;
