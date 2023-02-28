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
                        {relatedGroups.slice(0, 5).map((group) => (
                            <ListGroupItem key={group.slug}>
                                <Link
                                    to={`/group/${group.slug}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    {group.name}
                                </Link>
                                <p>{group.description}</p>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    );
}

export default RelatedGroups;
