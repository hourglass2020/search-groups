import React, { useContext } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { GroupContext } from './../../context/groupContext';
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

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

function AddGroupForm(props) {
    const { tags } = useContext(GroupContext);
    const processedTags = tags.map(tag => { return { name: tag.name, slug: tag.slug } })
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        if (value.length > 5) {
            toast.error("بیشتر از 5 تگ نمی توانید انتخاب کنید.");
            return;
        }

        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <div dir='rtl'>
            <Modal
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
                    <FormControl className='w-100'>
                        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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
                                // style={getStyles(name, personName, theme)}
                                >
                                    {tag.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
            </Modal>
        </div>
    )
}

export default AddGroupForm