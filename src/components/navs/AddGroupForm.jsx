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
        return { name: tag.name, slug: tag.slug };
    });

    const [selectedTags, setSelectedTags] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        if (value.length > 5) {
            toast.error("بیشتر از 5 تگ نمی توانید انتخاب کنید.");
            return;
        }

        setSelectedTags(typeof value === "string" ? value.split(",") : value);
    };

    return (
        <div dir="rtl">
            <Dialog open={open} onClose={handleClose} dir="rtl">
                <DialogTitle>افزودن گروه جدید</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        لطفا قبل از وارد کردن اطلاعات گروه، از نبودن آن گروه در بین گروه های
                        سایت مطمئن شوید.
                    </DialogContentText>
                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            {" "}
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="اسم گروه"
                                type="text"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={12}>
                            {" "}
                            <TextField
                                autoFocusmargin="dense"
                                id="description"
                                label="توضیحات مربوط"
                                type="text"
                                fullWidth
                                multiline
                                rows={3}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={12}>
                            {" "}
                            <FormControl className="w-100">
                                <InputLabel id="demo-multiple-chip-label">
                                    تگ های مربوط
                                </InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={selectedTags}
                                    onChange={handleChange}
                                    input={
                                        <OutlinedInput id="select-multiple-chip" label="Chip" />
                                    }
                                    renderValue={(selected) => (
                                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
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
                                autoFocusmargin="dense"
                                id="link"
                                label="لینک گروه"
                                type="url"
                                fullWidth
                                variant="outlined"
                            /></Grid>
                        <Grid xs={12}>  {" "}
                            <div className="d-flex">
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <PhotoCamera />
                                </IconButton>
                                <TextField
                                    autoFocusmargin="dense"
                                    id="image"
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
                        onClick={() => {
                            toast("درحال تکمیل سایت هستیم...", { icon: "🚀" });
                            handleClose();
                        }}
                    >
                        ثبت گروه
                    </Button>
                </DialogActions>
            </Dialog>

            {/*  <Modal
                        {...props}
                        size='lg'
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        style={{ direction: 'rtl' }}
                    >
                        <Modal.Header>
                            <Modal.Title id='contained-modal-title-vcenter'>
                                افزودن گروه جدید
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
        
                            <Form>
                                <Form.Control type='text' placeholder='نام گروه' className='mt-2' />
                                <Form.Control type='url' placeholder='آدرس گروه' className='mt-2' />
                                <Form.Control type='url' placeholder='آدرس عکس گروه' className='mt-2' />
                                <Form.Control type='text' as={"textarea"} placeholder='توضیحات بیشتر' className='mt-2' />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={props.onHide}>انصراف</Button>
                            <Button onClick={() => {
                                toast("درحال تکمیل سایت هستیم...", { icon: "🚀" });
                                props.onHide()
                            }}>افزودن</Button>
                        </Modal.Footer>
                    </Modal> */}
        </div>
    );
}

export default AddGroupForm;
