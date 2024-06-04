/* eslint-disable react/prop-types */
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //the actual context that every child should need
  const authContext = useFirebase();
  return (
    <AuthContext.Provider value={authContext}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
