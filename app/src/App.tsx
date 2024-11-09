import { client } from "@/client/services.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import { router } from "./router";

client.setConfig({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

// Create a client
const queryClient = new QueryClient();

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <InnerApp />
        </AuthProvider>
        {/* <AppLayout /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
