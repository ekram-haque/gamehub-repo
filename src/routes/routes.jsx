import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Games from '../pages/Games';
import RouteError from '../pages/RouteError'
import PremiumGames from "../pages/PremiumGames";
import GameDetails from "../pages/GameDetails";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";


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
        
      },
      
      {
        path:'/games',
        element:<Games/>
      },
      
      {
        path:'/premium',
        element:<PremiumGames/>
      },
      {
        path:'/games/:id',
        element:<GameDetails/>
      },
      {
        path:'/my-profile',
        element:<MyProfile/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
    ],
  },
]);

export default router;
