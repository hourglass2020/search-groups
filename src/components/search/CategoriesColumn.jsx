import React, { useContext } from "react";
import { Card, ListGroupItem, ListGroup, Form } from "react-bootstrap";
import { GroupContext } from "./../../context/groupContext";
import _ from "lodash";

function CategoriesColumn({ tags }) {
    const { selectedTags, setSelectedTags } = useContext(GroupContext);

    const handleSelect = (event, tag) => {
        if (event.target.checked === true) {
            if (!_.includes(selectedTags, tag)) {
                setSelectedTags([...selectedTags, tag]);
            }
        } else {
            if (_.includes(selectedTags, tag)) {
                const filteredTags = selectedTags.filter((t) => t === tag.id);
                setSelectedTags(filteredTags);
            }
        }

        console.log(selectedTags);
    };

    return (
        <div>
            <h4>انتخاب گروه</h4>
            <Card className="mb-4">
                <Card.Body>
                    <ListGroup variant="flush">
                        {tags.slice(4, 15).map((tag) => (
                            <ListGroupItem key={`tag${tag.id}`}>
                                <Form.Check
                                    type="checkbox"
                                    label={tag.title}
                                    onClick={(event) => handleSelect(event, tag)}
                                />
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CategoriesColumn;
