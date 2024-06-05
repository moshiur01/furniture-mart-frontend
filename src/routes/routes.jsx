import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login";
import SingUp from "../components/Authentication/SingUp";
import CategoryWiseProducts from "../components/Products/CategoryWiseProducs";
import MainLayout from "../layouts/MainLayout";
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
]);
