import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRelatedGroups, getSpecificGroup, getGroupCommnets } from './../../services/service';

import RelatedGroups from "./RelatedGroups";
import GroupInfo from './GroupInfo';
import GroupMoreInfo from "./GroupMoreInfo";

function GroupPage() {
    const { groupSlug } = useParams();

    const [group, setGroup] = useState({});
    const [relatedGroups, setRelatedGroups] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: groupData } = await getSpecificGroup(groupSlug);
                const { data: relatedGroupsData } = await getRelatedGroups(groupSlug);
                const { data: commentsData } = await getGroupCommnets(groupSlug);

                setComments(commentsData.data);
                setGroup(groupData);
                setRelatedGroups(relatedGroupsData);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, [groupSlug]);

    return (
        <div className="row mt-4">
            <section className="col-12 col-lg-9">
                <GroupInfo group={group} />
                <GroupMoreInfo group={group} comments={comments} />
            </section>
            <section className="col-12 col-lg-3">
                <RelatedGroups relatedGroups={relatedGroups} />
            </section>
        </div>
    );
}

export default GroupPage;
