/* eslint-disable no-unused-vars */

import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const { googleLogin, loading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      onClick={() => {
        googleLogin(location, navigate);
      }}
      type=""
      className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#054C73] px-4 py-3 text-xl leading-[30px] text-white"
    >
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <>
          <FcGoogle /> Google Login
        </>
      )}
    </button>
  );
};

export default GoogleLogin;
