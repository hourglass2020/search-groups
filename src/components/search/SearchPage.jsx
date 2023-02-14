import React, { useState, useContext } from "react";
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
import { GroupContext } from './../../context/groupContext';
import CategoriesColumn from "./CategoriesColumn";

function SearchPage() {
    const { groups, tags } = useContext(GroupContext);
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
            <div className="col-12 col-md-3 mt-5">
                <CategoriesColumn tags={tags} />
            </div>
            <div
                className="col-12 col-md-9 mt-4 d-flex flex-column align-items-center"
            >
                <div className="w-100 row mt-md-3">
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
                <div className="mt-1 w-100">
                    <ListGroup variant="flush" className="main-list">
                        {groups.map((group) => (
                            <ListGroup.Item key={`group${group.slug}`}>
                                <MainListItem
                                    name={group.name}
                                    description={group.description}
                                    id={group.slug}
                                    image={group.image}
                                />
                            </ListGroup.Item>
                        ))}
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
