import React, { useState, useContext } from "react";
import {
    ListGroup,
    Pagination,
} from "react-bootstrap";

import MainListItem from "../landing/MainListItem";
import CategoriesColumn from "./CategoriesColumn";

import { GroupContext } from './../../context/groupContext';
import SearchForm from "../navs/SearchForm";
import { isEmpty } from "lodash";

function SearchPage() {
    const { filteredGroups, tags } = useContext(GroupContext);
    const [active, setActive] = useState(1);

    let items = [];
    for (let number = 1; number <= 3; number++) {
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
                    <div className="col-sm-7 col-12">
                        <SearchForm />
                    </div>
                </div>
                <div className="mt-1 w-100">
                    <ListGroup variant="flush" className="main-list">
                        {filteredGroups.map((group) => (
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
                {isEmpty([filteredGroups]) ? null :
                    <Pagination dir="ltr" className="mt-4">
                        {items}
                    </Pagination>
                }
            </div>
        </div>
    );
}

export default SearchPage;
