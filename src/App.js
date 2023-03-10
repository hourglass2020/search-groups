import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  debounce,
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
import { HelmetProvider } from "react-helmet-async";

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
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useImmer([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formShow, setFormShow] = useState(false)
  const [pageCount, setPageCount] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: groupData } = await getAllGroups(pageCount, query, selectedTags);
        const { data: tagsData } = await getAllTags();

        setLastPage(groupData.meta.last_page);
        setGroups(groupData.data);
        setTags(tagsData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [pageCount, query, selectedTags]);

  const groupSearch = debounce((searchQuery) => {
    setQuery(searchQuery);
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

  const handleClickOpenForm = () => {
    setFormShow(true);
  };

  const handleCloseForm = () => {
    setFormShow(false);
  };

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
          groupSearch,
          handleSelect,
          setDrawerOpen,
          drawerOpen,
          formShow,
          setFormShow,
          handleClickOpenForm,
          handleCloseForm,
          pageCount,
          setPageCount,
          lastPage,
          query,
          setQuery
        }}
      >
        <HelmetProvider >
          <RouterProvider router={router} />
        </HelmetProvider>
      </GroupContext.Provider>
    </div>
  );
}

export default App;
