import { authContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export default useAuth;
