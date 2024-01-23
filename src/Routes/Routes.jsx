import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/HomeLayout";
import Login from "../component/pages/Login"
import AllHouses from "../component/pages/AllHouses";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<HomeLayout></HomeLayout>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/allhouse",
          element:<AllHouses></AllHouses>,
          loader:()=>fetch("../House.json")
        }
   
      ]
    },
  ]);

  export default router