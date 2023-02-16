import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { GroupContext } from './../../context/groupContext';

function SearchForm() {

    const navigate = useNavigate();

    const { groupSearch } = useContext(GroupContext);

    const onSubmit = (event) => {
        event.preventDefault();
        groupSearch(event.target.search.value)
        navigate("/search");
    }

    return (
        <>
            <Form className="d-flex" onSubmit={onSubmit}>
                <Form.Control
                    type="search"
                    name="search"
                    placeholder="جست و جو"
                    className="me-2 mx-1"
                    aria-label="Search"
                    onChange={event => groupSearch(event.target.value)}
                />
                <Button variant="outline-primary" type="submit">
                    <BsSearch />
                </Button>
            </Form>
        </>
    );
}

export default SearchForm;
