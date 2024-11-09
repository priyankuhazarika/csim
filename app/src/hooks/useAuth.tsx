import { authControllerMe } from "@/client/services.gen";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserProfile {
  // Define the structure based on your API response for `memberProfile`
  // Example properties:
  login: boolean;
}

// Define the structure of the data returned by useAuth
export interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  userData: UserProfile | null;
}

// Create the Auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const useAuth = (): AuthContextType | undefined => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserProfile | null>(null);

  useEffect(() => {
    const checkLoggedInStatus = async () => {
      try {
        // Call the profile API
        await authControllerMe();

        setIsLoggedIn(true);
        setIsLoading(false);
        setUserData({ login: false });
      } catch (error) {
        if (error) {
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      }
    };

    checkLoggedInStatus();
  }, []);

  const value = {
    isLoggedIn,
    isLoading,
    userData,
    setIsLoggedIn,
    setIsLoading,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
