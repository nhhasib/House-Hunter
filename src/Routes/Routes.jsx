import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/HomeLayout";
import Login from "../component/pages/Login"
import AllHouses from "../component/pages/AllHouses";
import HouseDetails from "../component/pages/HouseDetails";
import Registation from "../component/pages/Registation";
import Registration from "../component/pages/Registation";


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
path:"/registration",
element:<Registration></Registration>
        },
        {
          path:"/allhouse",
          element:<AllHouses></AllHouses>,
          loader:()=>fetch("../House.json")
        },
        {
          path: "/houses/:id",
          element: <HouseDetails></HouseDetails>,
          loader:({params})=>fetch(`https://house-hunter-server-bfw8u70n9-nhhasib.vercel.app/houses/${params.id}`)
        },
   
      ]
    },
  ]);

  export default router