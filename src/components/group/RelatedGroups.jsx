import React from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RelatedGroups({ relatedGroups }) {
    return (
        <>
            <Card className="mb-4 mt-4">
                <Card.Header style={{ backgroundColor: "#fff" }}>
                    <Card.Title>گروه های مرتبط</Card.Title>
                </Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        {relatedGroups.slice(0, 10).map((tag) => (
                            <ListGroupItem key={tag.slug}>
                                <Link
                                    to={`/group/${tag.slug}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    {tag.name}
                                </Link>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    );
}

export default RelatedGroups;
