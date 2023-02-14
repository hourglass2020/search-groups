import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import MainLayout from "./layouts/MainLayout";

import "./App.css";
import SearchPage from "./components/search/SearchPage";
import GroupPage from "./components/group/GroupPage";
import { getAllGroups, getAllTags } from './services/service';
import { GroupContext } from './context/groupContext';

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
        element: (
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <img
              src="/images/404.png"
              alt="404"
              height={304}
              className="mt-5"
            />
            <h4>صفحه موردنظر پیدا نشد.</h4>
          </div>
        ),
      },
    ],
  },
]);

function App() {

  const [groups, setGroups] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: groupData } = await getAllGroups();
        const { data: tagsData } = await getAllTags();

        setGroups(groupData.data);
        setTags(tagsData);
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData();
  }, []);

  return (
    <div dir="rtl">
      <GroupContext.Provider value={{
        groups,
        setGroups,
        tags,
        setTags
      }}>
        <RouterProvider router={router} />
      </GroupContext.Provider>
    </div>
  );
}

export default App;
