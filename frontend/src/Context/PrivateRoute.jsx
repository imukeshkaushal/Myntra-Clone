import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function PrivateRoute({ children }) {
  const { pathname } = useLocation();
  const { authState } = useContext(AuthContext);

  if (authState.isAuth) {
    return children;
  } 

  
}

export default PrivateRoute;
