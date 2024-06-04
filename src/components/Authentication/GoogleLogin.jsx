/* eslint-disable no-unused-vars */
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase/firebase.auth";
const GoogleLogin = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

  return (
    <button
      onClick={() => {
        signInWithGoogle();
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
