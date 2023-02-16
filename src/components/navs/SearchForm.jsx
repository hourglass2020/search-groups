import React from "react";
import { Button, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function SearchForm() {
    return (
        <>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="جست و جو"
                    className="me-2 mx-1"
                    aria-label="Search"
                />
                <Button variant="outline-primary">
                    <BsSearch />
                </Button>
            </Form>
        </>
    );
}

export default SearchForm;
