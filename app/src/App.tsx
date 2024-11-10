import { client } from "@/client/services.gen";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { LoaderCircle } from "lucide-react";
import { AuthProvider } from "./hooks/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import { router } from "./router";

client.setConfig({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

function InnerApp() {
  const auth = useAuth();
  if (auth?.isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <LoaderCircle className="w-12 h-12  animate-spin" />
      </div>
    );
  }
  return <RouterProvider router={router} context={{ auth }} />;
}

// Create a client
const queryClient = new QueryClient();

// Register the router instance for type safety

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <InnerApp />
          <Toaster />
        </AuthProvider>
        {/* <AppLayout /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
