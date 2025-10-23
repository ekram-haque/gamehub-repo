import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Games from '../pages/Games';
import RouteError from '../pages/RouteError'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RouteError />,
    
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path:'/home',
        element:<Home/>,
        loader: () => fetch('/games-data.json')
      },
      
      {
        path:'/games',
        element:<Games/>
      },
      {
        path:'/blog',
        element:<Games/>
      },
      
    ],
  },
]);

export default router;
