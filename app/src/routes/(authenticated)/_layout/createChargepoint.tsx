import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute(
  "/(authenticated)/_layout/createChargepoint"
)({
  component: RouteComponent,
});

const formSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Email cannot be empty!",
    })
    .email("This is not a valid email."),
});

function RouteComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full h-full">
      <h2 className="scroll-m-20 pb-4 text-2xl font-semibold tracking-tight first:mt-0">
        Build Chargepoint
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-[100%] pb-4"
        >
          <div className="bg-slate-50 rounded-md p-4 border border-slate-100">
            <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 ">
              Basic Information
            </h3>
            <div className="flex justify-between items-center w-[100%] gap-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Chargepoint ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Chargepoint ID" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the chargepoint identifier, keep it blank for
                      auto-generated ID
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the public display name for the chargepoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-center w-[100%] gap-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Chargepoint Vendor</FormLabel>
                    <FormControl>
                      <Input placeholder="Chargepoint vendor" {...field} />
                    </FormControl>
                    <FormDescription>
                      This identifies the vendor of the ChargePoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Chargepoint Model</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Model number of the chargepoint"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This identifies the model of the ChargePoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-center w-[100%] gap-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Chargebox Serial Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Chargepoint vendor" {...field} />
                    </FormControl>
                    <FormDescription>
                      This identifies the vendor of the ChargePoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Chargepoint Serial Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Model number of the chargepoint"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This identifies the model of the ChargePoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-center w-[100%] gap-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Firmware Version</FormLabel>
                    <FormControl>
                      <Input placeholder="Chargepoint vendor" {...field} />
                    </FormControl>
                    <FormDescription>
                      This identifies the vendor of the ChargePoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>ICCID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Model number of the chargepoint"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This identifies the model of the ChargePoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-center w-[100%] gap-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>IMSI</FormLabel>
                    <FormControl>
                      <Input placeholder="Chargepoint vendor" {...field} />
                    </FormControl>
                    <FormDescription>
                      This identifies the vendor of the ChargePoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Meter Serial Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Model number of the chargepoint"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This identifies the model of the ChargePoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-center w-[100%] gap-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Meter Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Chargepoint vendor" {...field} />
                    </FormControl>
                    <FormDescription>
                      This identifies the vendor of the ChargePoint
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="bg-slate-50 rounded-md p-4 border border-slate-100">
            <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 ">
              Connectors
            </h3>
          </div>

          <div className="bg-slate-50 rounded-md p-4 border border-slate-100">
            <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 ">
              Configurations
            </h3>
          </div>

          <div className="bg-slate-50 rounded-md p-4 border border-slate-100">
            <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 ">
              Communication Protocol
            </h3>
            <div className="flex justify-between items-center w-[100%] gap-8 mb-3">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>OCPP Version</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[250px]">
                          <SelectValue placeholder="Select OCPP Version" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>OCPP Versions</SelectLabel>
                            <SelectItem value="apple">OCPP 1.6</SelectItem>
                            <SelectItem value="banana">OCPP 2.0</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between items-center w-[100%] gap-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[40%]">
                    <FormLabel>Protocol</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[250px]">
                          <SelectValue placeholder="Select Protocol" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Protocols</SelectLabel>
                            <SelectItem value="apple">wss://</SelectItem>
                            <SelectItem value="banana">ws://</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Host</FormLabel>
                    <FormControl>
                      <Input placeholder="Chargepoint ID" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[40%]">
                    <FormLabel>Port</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Chargepoint ID"
                        {...field}
                        type="number"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[100%]">
                    <FormLabel>Path</FormLabel>
                    <FormControl>
                      <Input placeholder="Chargepoint ID" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end w-full">
            <Button type="submit">Create chargepoint</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
