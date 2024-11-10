import AppLayout from "@/layouts/AppLayout";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/_layout")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isLoggedIn) {
      throw redirect({
        to: "/login",
        // search: {
        //   redirect: location.href,
        // },
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <AppLayout />;
}
