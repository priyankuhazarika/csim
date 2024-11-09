import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/_layout/ssc")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /(authenticated)/_layout/ssc!";
}
