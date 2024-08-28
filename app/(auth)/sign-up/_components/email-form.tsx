"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AtSign, LockKeyhole, User } from "lucide-react";
import { InputProps } from "@/types";

type Props = {};

export const FormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
});

const inputs: InputProps[] = [
  { name: "firstName", label: "First Name", type: "text", Icon: User },
  { name: "lastName", label: "Last Name", type: "text", Icon: User },
  { name: "email", label: "Email", type: "email", Icon: AtSign },
  { name: "password", label: "Password", type: "password", Icon: LockKeyhole },
  {
    name: "passwordConfirmation",
    label: "Password Confirmation",
    type: "password",
    Icon: LockKeyhole,
  },
];

const EmailForm = (props: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
      passwordConfirmation: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="justify-center space-y-6 mx-auto"
      >
        <div className="flex w-full  items-center space-x-2">
          {inputs.slice(0, 2).map((input) => (
            <FormField
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-center px-2 py-1 rounded bg-[#EFF6F8] appearance-none">
                    {<input.Icon className="size-4  opacity-55" />}
                    <FormControl>
                      <Input
                        type={input.type}
                        placeholder={input.label}
                        {...field}
                        className="py-6 bg-[#EFF6F8] appearance-none focus-visible:ring-offset-0  border-0 focus-visible:outline-none focus-visible:!ring-0"
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          ))}
        </div>

        {inputs.slice(2).map((input) => (
          <FormField
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <div className="flex  items-center justify-center px-2 py-1 rounded bg-[#EFF6F8] appearance-none">
                  {<input.Icon className="size-4  opacity-55" />}
                  <FormControl>
                    <Input
                      placeholder={input.label}
                      type={input.type}
                      {...field}
                      className="py-6 bg-[#EFF6F8] appearance-none focus-visible:ring-offset-0  border-0 focus-visible:outline-none focus-visible:!ring-0"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          className="p-6 w-full text-white "
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

export default EmailForm;
