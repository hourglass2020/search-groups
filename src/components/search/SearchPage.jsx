import React, { useState } from "react";
import {
    Button,
    Card,
    Form,
    ListGroup,
    ListGroupItem,
    Pagination,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import MainListItem from "../landing/MainListItem";

function SearchPage() {
    const [active, setActive] = useState(1);

    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => setActive(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div className="row">
            <div className="col-3 mt-4">
                <h4>انتخاب گروه</h4>
                <Card>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="Laravel" />
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="PHP" />
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="NodeJS" />
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="ReactJS" />
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="VueJS" />
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="Android" />
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="Java" />
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="C/C++" />
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="C#" />
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Check type="checkbox" label="Flutter" />
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
            <div
                className="col-9 d-flex flex-column justify-content-center align-items-center"
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
                <div className="mt-3 w-100">
                    <ListGroup variant="flush" className="main-list">
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
                        <ListGroup.Item>
                            <MainListItem />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <MainListItem />
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <Pagination dir="ltr" className="mt-4">
                    {items}
                </Pagination>
            </div>
        </div>
    );
}

export default SearchPage;
