import { createBrowserRouter } from "react-router-dom";
import { serverLink } from "../Config/RouteConfig";
import Login from "../components/Authentication/Login";
import SingUp from "../components/Authentication/SingUp";
import CategoryWiseProducts from "../components/Products/CategoryWiseProducs";
import AdminLayout from "../layouts/Admin/AdminLayout";
import MainLayout from "../layouts/MainLayout";
import AddProducts from "../pages/Admin/AddProducts";
import AdminPageHome from "../pages/Admin/AdminPageHome";
import AdminProfile from "../pages/Admin/AdminProfile";
import EditProducts from "../pages/Admin/EditProducts";
import ManageProducts from "../pages/Admin/ManageProducts";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import UserProfile from "../pages/UserProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SingUp />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/products/:category",
        element: <CategoryWiseProducts />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <AdminPageHome />
          </PrivateRoute>
        ),
      },

      {
        path: "profile",
        element: (
          <PrivateRoute>
            <AdminProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "manageProducts",
        element: (
          <PrivateRoute>
            <ManageProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "addProducts",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "editProduct/:id",
        element: (
          <PrivateRoute>
            <EditProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${serverLink}/product/${params.id}`),
      },
    ],
  },
]);
