import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/_layout/abc")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /(authenticated)/_layout/abc!";
}
