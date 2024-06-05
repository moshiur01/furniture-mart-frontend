/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Authentication/Loading";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  let location = useLocation();
  if (user?.email && admin) {
    return children;
  }

  if (isLoading) {
    return <Loading />;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
