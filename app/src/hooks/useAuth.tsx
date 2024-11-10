import { useContext } from "react";
import { AuthContext, AuthContextType } from "./AuthProvider";

export const useAuth = (): AuthContextType | undefined => {
  return useContext(AuthContext);
};
