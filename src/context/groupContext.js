import { createContext } from "react";

export const GroupContext = createContext({
    groups: [],
    setGroups: () => { },
    tags: [],
    setTags: () => { }
});