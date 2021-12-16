import { useContext } from "react";

import { AuthContext } from "../context/AuthContextProvider";

export const useAuth = () => {
  return useContext(AuthContext);
}