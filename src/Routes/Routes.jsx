import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderMenu from "../Pages/OurMenu/OrderMenu/OrderMenu";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order",
        element: <OrderMenu/>,
      },
      {
        path: "/order/:name",
        element: <OrderMenu/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);
export default router;