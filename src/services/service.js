import axios from "axios";

const SERVER_URL = "https://devgp.iranshomar.ir/api/v1";

// @desc Get All Groups
// @route GET %SERVER_URL%/groups
export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}

// @desc Get All Tags
// @route GET %SERVER_URL%/tags
export const getAllTags = () => {
    const url = `${SERVER_URL}/tags`;
    return axios.get(url);
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

