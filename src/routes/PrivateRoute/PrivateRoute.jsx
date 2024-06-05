import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Authentication/Loading";
import useAuth from "../../hooks/useAuth";
// eslint-disable-next-line react/prop-types, no-unused-vars
const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();

  let location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
