import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";

import {
    getRelatedGroups,
    getSpecificGroup,
    getGroupCommnets,
    addNewComment,
} from "./../../services/service";
import RelatedGroups from "./RelatedGroups";
import GroupInfo from "./GroupInfo"
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
                toast.error("دریافت اطلاعات با خطا مواجه شد، مجدد تلاش کنید.");
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
            const { status } = await addNewComment(commentData);

            if (status === 201) {
                toast.success("نظر شما با موفقیت ثبت شد.");
                clearCommentFields(event);
            }
        } catch (error) {
            console.log(error.message);
            toast.error("متاسفانه ثبت نظر شما با خطا مواجه شد.");
        }
    };

    const clearCommentFields = (event) => {
        event.target.fullname.value = "";
        event.target.email.value = "";
        event.target.message.value = "";
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${group.name} - ${global.name}`}</title>
            </Helmet>
            <Grid container spacing={2} direction={"row"} sx={{ mt: 4 }}>
                <Grid xs={12} lg={9}>
                    <GroupInfo group={group} />
                    <GroupMoreInfo
                        group={group}
                        comments={comments}
                        handleSubmitCommentForm={handleSubmitCommentForm}
                    />
                </Grid>
                <Grid xs={12} lg={3}>
                    <RelatedGroups relatedGroups={relatedGroups} />
                </Grid>
            </Grid>
        </div>
    );
}

export default GroupPage;
