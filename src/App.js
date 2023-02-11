import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import MainLayout from "./layouts/MainLayout";

import "./App.css";
import SearchPage from "./components/search/SearchPage";
import GroupPage from "./components/group/GroupPage";

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
        path: "group",
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
  return (
    <div dir="rtl">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
