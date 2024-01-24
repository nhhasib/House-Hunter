import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/HomeLayout";
import Login from "../component/pages/Login"
import AllHouses from "../component/pages/AllHouses";
import HouseDetails from "../component/pages/HouseDetails";


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
        },
        {
          path: "/houses/:id",
          element: <HouseDetails></HouseDetails>,
          loader:({params})=>fetch(`http://localhost:3000/houses/${params.id}`)
        },
   
      ]
    },
  ]);

  export default router