import React from 'react'
import { Button, Form, Modal, Row } from 'react-bootstrap'
import { toast } from 'react-hot-toast'

function AddGroupForm(props) {

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