import { createContext } from "react";
import PropTypes from "prop-types";
import App from "../App";
import app from "../Firebase/Firebase.Config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Auth = getAuth(app)

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const AuthInfo = { name: "Hello World From UseContext" };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
