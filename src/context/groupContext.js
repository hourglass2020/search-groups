import { createContext } from "react";

export const GroupContext = createContext({
    groups: [],
    setGroups: () => { },
    tags: [],
    setTags: () => { },
    selectedTags: [],
    setSelectedTags: () => { },
    filteredGroups: [],
    setFilteredGroups: () => { },
    groupSearch: () => { }
});