import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    getRelatedGroups,
    getSpecificGroup,
    getGroupCommnets,
    addNewComment,
} from "./../../services/service";

import RelatedGroups from "./RelatedGroups";
import GroupInfo from "./GroupInfo";
import GroupMoreInfo from "./GroupMoreInfo";
import { toast } from 'react-hot-toast';

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
        };

        fetchData();
    }, [groupSlug]);

    const handleSubmitCommentForm = async (event) => {
        event.preventDefault();
        const tempData = new FormData(event.currentTarget);
        const commentData = {
            group: groupSlug,
            name: tempData.get("fullname"),
            email: tempData.get("email"),
            message: tempData.get("message").trim(),
        };

        try {
            const { data, status } = await addNewComment(commentData);

            if (status === 201) {
                toast.success("نظر شما با موفقیت ثبت شد.")
                clearCommentFields(event);
            }

        } catch (error) {
            console.log(error.message);
            toast.error("متاسفانه ثبت نظر شما با خطا مواجه شد.")
        }
    };

    const clearCommentFields = (event) => {
        event.target.fullname.value = "";
        event.target.email.value = "";
        event.target.message.value = "";
    }

    return (
        <div className="row mt-4">
            <section className="col-12 col-lg-9">
                <GroupInfo group={group} />
                <GroupMoreInfo
                    group={group}
                    comments={comments}
                    handleSubmitCommentForm={handleSubmitCommentForm}
                />
            </section>
            <section className="col-12 col-lg-3">
                <RelatedGroups relatedGroups={relatedGroups} />
            </section>
        </div>
    );
}

export default GroupPage;
