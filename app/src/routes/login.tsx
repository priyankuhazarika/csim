import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    if (context.auth.userData) {
      throw redirect({
        to: "/abc",
      });
    }
  },
  component: Login,
});

function Login() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
