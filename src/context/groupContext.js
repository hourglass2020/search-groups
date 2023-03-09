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
    groupSearch: () => { },
    handleSelect: () => { },
    setDrawerOpen: () => { },
    drawerOpen: {},
    handleCloseForm: () => { },
    handleClickOpenForm: () => { },
    formShow: {},
    setFormShow: () => { },
    pageCount: {},
    setPageCount: () => { },
    lastPage: 0
});