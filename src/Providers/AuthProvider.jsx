import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../Firebase/Firebase.Config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const Auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logOut = () => {
    signOut(Auth)
      .then(() => {
        console.log("Sign Out Successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const AuthInfo = { user, createUser, loginUser, logOut };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
