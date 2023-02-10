import React from "react";
import { Button, Form, ListGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import MainListItem from "./MainListItem";

function LandingPage() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <section
                className="my-5"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="d-flex align-items-center ">
                    <img src="/images/logo.png" alt="logo" height={150} />
                    <h1 className="mx-4">گروه یاب</h1>
                </div>
                <h5 className="text-center">سایت جست و جو و یافتن گروه های تکنولوژی در تلگرام</h5>
            </section>
            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="my-4 d-flex w-100 flex-column justify-content-end">
                    <div className="col-12 h-25">
                        <div className="row">
                            <h2 className="col-sm-5 col-12">جست و جو کنید:</h2>
                            <Form className="col-sm-7 col-12 d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="مثلا: برنامه نویسی لاراول"
                                    className="me-2 mx-1"
                                    aria-label="Search"
                                />
                                <Button variant="outline-primary">
                                    <BsSearch />
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="mt-3 w-100"
                    style={{ maxHeight: '100px' }}
                >
                    <ListGroup variant="flush" style={{ maxHeight: '30vh' }} className="overflow-auto main-list">
                        <ListGroup.Item>
                            <MainListItem />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <MainListItem />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <MainListItem />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <MainListItem />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <MainListItem />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <MainListItem />
                        </ListGroup.Item>
                    </ListGroup>
                    <Button size="sm" variant="outline-primary" className="mb-4 w-100 mt-3">
                        مشاهده بیشتر
                    </Button>
                </div>
            </section>
        </div >
    );
}

export default LandingPage;
