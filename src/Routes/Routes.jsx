import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderMenu from "../Pages/OurMenu/OrderMenu/OrderMenu";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Users from "../Pages/Dashboard/Users/Users";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";


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
        element: (
          <PrivateRoutes>
            <Menu></Menu>
          </PrivateRoutes>
        ),
      },
      {
        path: "/order",
        element: <OrderMenu />,
      },
      {
        path: "/order/:name",
        element: <OrderMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      //normal user
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },

      //admin routes
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoutes>
            <UpdateItem></UpdateItem>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },

      {
        path: "/dashboard/manageItem",
        element: (
          <AdminRoutes>
            <ManageItems></ManageItems>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoutes>
            <Users></Users>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
export default router;