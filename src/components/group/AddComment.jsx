import Grid from "@mui/material/Unstable_Grid2";
import {
    Box,
    Button,
    TextField,
    Paper,
} from "@mui/material";

function AddComment({ handleSubmitCommentForm }) {
    return (
        <Paper>
            <Box
                component={"form"}
                onSubmit={handleSubmitCommentForm}
                sx={{ mt: 3 }}
            >
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
    )
}

export default AddComment