import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/HomeLayout";
import Login from "../component/pages/Login"


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
        }
   
      ]
    },
  ]);

  export default router