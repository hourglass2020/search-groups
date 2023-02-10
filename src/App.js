import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './components/landing/LandingPage';
import MainLayout from './layouts/MainLayout';

import './App.css';
import SearchPage from './components/search/SearchPage';
import GroupPage from './components/group/GroupPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <LandingPage />
      },
      {
        path: "search",
        element: <SearchPage />
      },
      {
        path: "group",
        element: <GroupPage />
      }
    ]
  }
])

function App() {
  return (
    <div dir='rtl'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
