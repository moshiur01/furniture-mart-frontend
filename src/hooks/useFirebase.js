import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //register new user
  const createUser = (FormData, navigate) => {
    const { displayName, email, phoneNumber, photoURL, password } = FormData;
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        setAuthError("");
        const newUSER = {
          email,
          displayName,
          phoneNumber,
          photoURL,
          role: "user",
        };
        setUser(newUSER);

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName,
          phoneNumber,
          photoURL,
        })
          .then((res) => {
            console.log(res);
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            console.log(error);
          });

        toast.success("User Registered successful");

        navigate("/");
      })
      .catch((error) => {
        setAuthError(error);
      })
      .finally(() => setLoading(false));
  };

  const signIn = (FormData, navigate, location) => {
    const { email, password } = FormData;
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        const destination = location?.state?.from || "/";
        toast.success("User login successfully");
        setAuthError("");
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error?.message);
        toast.error(error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);

        toast.success("Logout successfully");
      })
      .catch((error) => {
        toast.error(error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //google login
  const googleLogin = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        const destination = location?.state?.from || "/";
        toast.success("User login successfully");
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error);
      })
      .finally(() => setLoading(false));
  };

  //update user info
  const updateUserInfo = (formData) => {
    const { displayName, email, phoneNumber } = formData;

    // send name to firebase after creation
    setLoading(true);
    if (loading) toast.loading("Please wait...");
    updateProfile(auth.currentUser, {
      displayName,
      phoneNumber,
      email,
    })
      .then(() => {
        toast.success("User data updated successfully");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        toast.error(error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //change user password
  const changePassword = (password) => {
    updatePassword(auth.currentUser, password)
      .then((res) => {
        console.log(res);
        toast.success("Password changed successfully");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    user,
    googleLogin,
    createUser,
    signIn,
    logout,
    loading,
    authError,
    updateUserInfo,
    changePassword,
  };
};

export default useFirebase;
