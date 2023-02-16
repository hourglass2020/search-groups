import React from "react";
import { Card, ListGroupItem, ListGroup, Form } from "react-bootstrap";

function CategoriesColumn({ tags }) {
    return (
        <div>
            <h4>انتخاب گروه</h4>
            <Card className="mb-4">
                <Card.Body>
                    <ListGroup variant="flush">
                        {tags.slice(0, 15).map((tag) => (
                            <ListGroupItem key={`tag${tag.id}`}>
                                <Form.Check type="checkbox" label={tag.title} />
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CategoriesColumn;
