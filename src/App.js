import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import _ from "lodash";

import { getAllGroups, getAllTags } from "./services/service";

import LandingPage from "./components/landing/LandingPage";
import MainLayout from "./layouts/MainLayout";
import SearchPage from "./components/search/SearchPage";
import GroupPage from "./components/group/GroupPage";
import NotFoundPage from "./components/NotFoundPage";

import { GroupContext } from "./context/groupContext";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "group/:groupSlug",
        element: <GroupPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  const [groups, setGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useImmer([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: groupData } = await getAllGroups();
        const { data: tagsData } = await getAllTags();

        setGroups(groupData.data);
        setFilteredGroups(groupData.data);
        setTags(tagsData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const groupSearch = _.debounce((query) => {
    if (!query)
      return setFilteredGroups([...groups]);

    setFilteredGroups(draft => draft.filter((group) => {
      return group.name.toLowerCase().includes(query.toLowerCase());
    }));
  }, 1000);

  return (
    <div dir="rtl">
      <GroupContext.Provider
        value={{
          groups,
          setGroups,
          tags,
          setTags,
          filteredGroups,
          setFilteredGroups,
          groupSearch,
        }}
      >
        <RouterProvider router={router} />
      </GroupContext.Provider>
    </div>
  );
}

export default App;
