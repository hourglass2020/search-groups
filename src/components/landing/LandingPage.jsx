import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";

import { GroupContext } from "./../../context/groupContext";

import MainListItem from "./MainListItem";
import LandingHeader from "./LandingHeader";
import SearchForm from "../navs/SearchForm";

function LandingPage() {
    const { filteredGroups } = useContext(GroupContext);

    return (
        <div className="d-flex flex-column justify-content-center">
            <LandingHeader />
            <section className="d-flex flex-column justify-content-center align-items-center">
                <div className="my-4 d-flex w-100 flex-column justify-content-end">
                    <div className="col-12 h-25">
                        <div className="row">
                            <h2 className="col-sm-5 col-12">جست و جو کنید:</h2>
                            <div className="col-sm-7 col-12">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 w-100" style={{ maxHeight: "100px" }}>
                    <ListGroup
                        variant="flush"
                        style={{ maxHeight: "30vh" }}
                        className="overflow-auto main-list"
                    >
                        {filteredGroups.slice(0, 3).map((group) => (
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
                    <Link to={"/search"}>
                        <Button
                            size="sm"
                            variant="outline-primary"
                            className="mb-4 w-100 mt-3"
                        >
                            مشاهده بیشتر
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
