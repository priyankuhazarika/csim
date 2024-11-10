import { Profile } from "@/client";
import { authControllerProfile } from "@/client/services.gen";
import { createContext, ReactNode, useEffect, useState } from "react";

// Define the structure of the data returned by useAuth
export interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  userData: Profile | null;
}

// Create the Auth context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Define the provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<Profile | null>(null);

  useEffect(() => {
    const checkLoggedInStatus = async () => {
      try {
        // Call the profile API
        const responseData = await authControllerProfile();

        if (responseData.error) {
          if (responseData.status === 401) {
            throw new Error("Unauthorized"); // Throw an error for 401 status
          }
          throw new Error("Something went wrong");
        }

        setIsLoggedIn(true);
        setIsLoading(false);
        setUserData(responseData.data!); // adding ! to data to remove the possibility of null
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
