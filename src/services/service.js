import axios from "axios";

const SERVER_URL = "https://devgp.iranshomar.ir/api/v1";

global.name = "گروه یاب";

// ? Groups

// @desc Get All Groups
// @route GET %SERVER_URL%/groups
export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}

export const addNewGroup = (groupData) => {
    const url = `${SERVER_URL}/groups`;
    return axios.post(url, groupData);
}

// @desc Get Specific group
// @route GET %SERVER_URL%/groups/:slug
export const getSpecificGroup = (groupSlug) => {
    const url = `${SERVER_URL}/groups/${groupSlug}`;
    return axios.get(url);
}

// @desc Get Related groups to Specific group
// @route GET %SERVER_URL%/tags
export const getRelatedGroups = (groupSlug) => {
    const url = `${SERVER_URL}/groups/${groupSlug}/related`;
    return axios.get(url);
}

// ? Tags

// @desc Get All Tags
// @route GET %SERVER_URL%/tags
export const getAllTags = () => {
    const url = `${SERVER_URL}/tags`;
    return axios.get(url);
}

// @desc Get a tag by slug
// @route GET %SERVER_URL%/tags/:slug
export const getAllTagsBySlug = (tagSlug) => {
    const url = `${SERVER_URL}/tags/${tagSlug}`;
    return axios.get(url);
}

// ? Comments

// @desc Get the list of comments for a specific group
// @route GET %SERVER_URL/comments?group={groupSlug}
export const getGroupCommnets = (groupSlug) => {
    const url = `${SERVER_URL}/comments?group=${groupSlug}`;
    return axios.get(url);
}

// @desc Create new comment for a specific group
// @route POST %SERVER_URL/comments?group={groupSlug}
export const addNewComment = (commentData) => {
    const url = `${SERVER_URL}/comments`;
    return axios.post(url);
}

