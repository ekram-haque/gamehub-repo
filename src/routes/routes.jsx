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
        element:<Home/>
      },
      
      {
        path:'/games',
        element:<Games/>
      },
      {
        path:'/my-profile',
        element:<Games/>
      },
      
    ],
  },
]);

export default router;
