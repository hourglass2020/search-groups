import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './components/landing/LandingPage';
import MainLayout from './layouts/MainLayout';

import './App.css';
import SearchPage from './components/search/SearchPage';

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
