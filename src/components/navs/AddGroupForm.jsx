import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import { GroupContext } from "./../../context/groupContext";
import { PhotoCamera } from "@mui/icons-material";
import { addNewGroup } from "../../services/service";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function AddGroupForm({ handleClose, setOpen, open }) {
    const { tags } = useContext(GroupContext);
    const processedTags = tags.map((tag) => {
        return { name: tag.name, slug: tag.slug, color: tag.color };
    });

    const [selectedTags, setSelectedTags] = useState([]);
    const [imageName, setImageName] = useState("");

    const handleChangeTags = (event) => {
        const {
            target: { value },
        } = event;
        console.log(processedTags)
        if (value.length > 5) {
            toast.error("بیشتر از 5 تگ نمی توانید انتخاب کنید.");
            return;
        }
        setSelectedTags(typeof value === "string" ? value.split(",") : value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let tagsData = [];

        selectedTags.forEach(t => {
            tagsData.push(processedTags.find(pt => pt.name === t));
        })

        const data = new FormData();
        data.append("name", event.target.name.value);
        data.append("description", event.target.description.value);
        tagsData.forEach(t => data.append('tags[]', t.slug));
        data.append("link", event.target.link.value);
        data.append("image", event.target["image-file"].files[0]);


        try {
            const { status } = await addNewGroup(data);

            if (status === 201) {
                toast.success("ثبت گروه با موفقیت انجام شد.")
            }
        } catch (error) {
            console.log(error);
            toast.error("ثبت با خطا مواجه شد.")
        }

    }

    const handleChangeImage = (event) => {
        setImageName(event.target.files[0].name);
    }

    return (
        <div dir="rtl">
            <Dialog open={open} onClose={handleClose} dir="rtl">
                <DialogTitle>افزودن گروه جدید</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            لطفا قبل از وارد کردن اطلاعات گروه، از نبودن آن گروه در بین گروه های
                            سایت مطمئن شوید.
                        </DialogContentText>
                        <Grid container /* component={"form"} */ spacing={2} >
                            <Grid xs={12}>
                                {" "}
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="اسم گروه"
                                    type="text"
                                    required
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid xs={12}>
                                {" "}
                                <TextField
                                    id="description"
                                    name="description"
                                    label="توضیحات مربوط"
                                    type="text"
                                    fullWidth
                                    multiline
                                    required
                                    rows={3}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid xs={12}>
                                {" "}
                                <FormControl className="w-100">
                                    <InputLabel id="tags-label">
                                        تگ ها
                                    </InputLabel>
                                    <Select
                                        labelId="tags-label"
                                        id="tags"
                                        name="tags"
                                        multiple
                                        value={selectedTags}
                                        onChange={handleChangeTags}
                                        input={
                                            <OutlinedInput id="select-multiple-chip" label="Chip" />
                                        }
                                        renderValue={(selected) => (
                                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                                {selected.map((value) =>
                                                    <Chip key={value} label={value} />
                                                )}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {processedTags.map((tag) => (
                                            <MenuItem
                                                key={tag.name}
                                                value={tag.name}
                                            >
                                                {tag.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>  {" "}
                                <TextField
                                    id="link"
                                    name="link"
                                    label="لینک گروه"
                                    type="url"
                                    helperText="لینک باید شامل https باشد."
                                    fullWidth
                                    required
                                    variant="outlined"
                                /></Grid>
                            <Grid xs={12}>  {" "}
                                <div className="d-flex">
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden name="image-file" accept="image/*" type="file" onChange={handleChangeImage} />
                                        <PhotoCamera />
                                    </IconButton>
                                    <TextField
                                        id="image"
                                        name="image"
                                        value={imageName}
                                        label="انتخاب عکس"
                                        type="text"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>انصراف</Button>
                        <Button
                            variant="contained"
                            type="submit"
                        /*  onClick={() => {
                             toast("درحال تکمیل سایت هستیم...", { icon: "🚀" });
                             handleClose();
                         }} */
                        >
                            ثبت گروه
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default AddGroupForm;
