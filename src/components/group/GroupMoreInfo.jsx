import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import GroupComments from './GroupComments';

function GroupMoreInfo({ group, comments }) {
    /* const comments = [
        {
            id: 1,
            name: "ممد ممدیان",
            message: "لورم ایپسوم متن ساختگلی",
            created_at: "2023-02-17 17:14:11"
        },
        {
            id: 2,
            name: "ممد ممدیان",
            message: "لورم ایپسوم متن ساختگلی",
            created_at: "2023-02-17 17:14:11"
        },
        {
            id: 3,
            name: "ممد ممدیان",
            message: "لورم ایپسوم متن ساختگلی",
            created_at: "2023-02-17 17:14:11"
        },
        {
            id: 4,
            name: "ممد ممدیان",
            message: "لورم ایپسوم متن ساختگلی",
            created_at: "2023-02-17 17:14:11"
        },
    ]
 */
    return (
        <div className="mt-5">
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3 w-100 p-0"
            >
                <Tab eventKey="home" title="توضیحات">
                    <p>
                        {group.description}
                    </p>
                </Tab>
                <Tab eventKey="profile" title="نظرات">
                    <GroupComments comments={comments} />
                </Tab>
            </Tabs>
        </div>
    );
}



export default GroupMoreInfo