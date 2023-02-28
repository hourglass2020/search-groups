import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import GroupComment from './GroupComment'

function GroupComments({ comments }) {
    return (
        <>
            {
                comments.map(comment => (
                    <GroupComment comment={comment} />
                ))
            }
        </>
    )
}

export default GroupComments