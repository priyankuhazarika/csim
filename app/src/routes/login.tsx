import { authControllerLogin, ErrorResponse } from "@/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    if (context.auth.isLoggedIn) {
      throw redirect({
        to: "/abc",
      });
    }
  },
  component: Login,
});

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email cannot be empty!",
    })
    .email("This is not a valid email."),
  password: z.string().min(1, { message: "Password cannot be empty!" }),
});

function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await authControllerLogin({
        body: {
          email: values.email,
          password: values.password,
        },
      });
      window.location.reload();

      console.log(values);
    } catch (error: unknown) {
      console.log("error", error);
      const typedError = error as ErrorResponse;
      toast.error(typedError.message);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            {/* onSubmit={form.handleSubmit(onSubmit)}  */}
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="hello@abc.com" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="password" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="mt-2"
                  loading={form.formState.isSubmitting}
                >
                  Login
                </Button>
                <div className="mt-0 text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/signup" className="underline">
                    Signup
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
