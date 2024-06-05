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
import { serverLink } from "../Config/RouteConfig";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState(null);

  //declare admin
  // const [admin, setAdmin] = useState(null);
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
        // save user to the database
        saveUser(email, displayName, phoneNumber, photoURL, "POST");

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
        console.log(result);
        const user = result.user;
        saveUser(
          user?.email,
          user?.displayName,
          user?.phoneNumber,
          user?.photoURL,
          "PUT",
        );
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

  // saved user function
  const saveUser = (email, displayName, phoneNumber, photoURL, method) => {
    const user = { email, displayName, phoneNumber, photoURL, role: "user" };
    fetch(`${serverLink}/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // // admin data load
  // useEffect(() => {
  //   fetch(`${serverLink}/users/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setAdmin(data);
  //     });
  // }, [user?.email]);

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
