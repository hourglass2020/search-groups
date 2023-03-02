import { Tab, Tabs } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

import GroupComments from './GroupComments';

function GroupMoreInfo({ group, comments }) {
    return (
        <div className="mt-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${group.name} - ${global.name}`}</title>
            </Helmet>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3 w-100 p-0"
            >
                <Tab eventKey="home" title="توضیحات">
                    <p dangerouslySetInnerHTML={{ __html: group.description }}></p>
                </Tab>
                <Tab eventKey="profile" title="نظرات">
                    <GroupComments comments={comments} />
                </Tab>
            </Tabs>
        </div>
    );
}



export default GroupMoreInfo