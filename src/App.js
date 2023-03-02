import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import _, {
  debounce,
  difference,
  includes,
  intersectionBy,
  isEmpty,
} from "lodash";

import { getAllGroups, getAllTags } from "./services/service";

import LandingPage from "./components/landing/LandingPage";
import MainLayout from "./layouts/MainLayout";
import SearchPage from "./components/search/SearchPage";
import GroupPage from "./components/group/GroupPage";
import NotFoundPage from "./components/NotFoundPage";

import { GroupContext } from "./context/groupContext";

import "./App.css";
import { Toaster } from "react-hot-toast";

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
  const [selectedTags, setSelectedTags] = useImmer([]);

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

  const groupSearch = debounce((query) => {
    if (!query) return setFilteredGroups([...groups]);

    setFilteredGroups((draft) =>
      draft.filter((group) => {
        return group.name.toLowerCase().includes(query.toLowerCase());
      })
    );
  }, 1000);

  const handleSelect = (checked, tag) => {
    if (checked === true) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags((draft) =>
        draft.filter((t) => {
          return t.slug !== tag.slug;
        })
      );
    }
  };

  useEffect(() => {
    if (!isEmpty(selectedTags)) {
      setFilteredGroups(
        groups.filter((group) => {
          console.log(intersectionBy(group.tags, selectedTags, "name"));
          return intersectionBy(group.tags, selectedTags, "name").length !== 0;
        })
      );
    } else {
      setFilteredGroups(groups);
    }
  }, [selectedTags]);

  return (
    <div dir="rtl">
      <Toaster position="bottom-left" />
      <GroupContext.Provider
        value={{
          groups,
          setGroups,
          tags,
          setTags,
          selectedTags,
          setSelectedTags,
          filteredGroups,
          setFilteredGroups,
          groupSearch,
          handleSelect,
        }}
      >
        <RouterProvider router={router} />
      </GroupContext.Provider>
    </div>
  );
}

export default App;
