"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Fingerprint } from "lucide-react";

export const FormSchema = z.object({
  phoneNumber: z.string().max(10).min(10),
  password: z.string().min(8),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-11/12 justify-center space-y-6 mx-auto"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <div className="flex w-full  items-center space-x-2">
                  <FormControl aria-disabled>
                    <div className="relative w-2/5">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-5">
                        <Image
                          src="/iraq-flag.png"
                          alt="Iraq Flag"
                          width={30}
                          height={30}
                          priority
                          className="h-5 w-auto"
                        />
                      </div>

                      <Input
                        placeholder="+964"
                        disabled
                        className="w-full py-6 bg-[#EFF6F8] appearance-none text-right sm:pr-5  !text-sm disabled:opacity-100"
                      />
                    </div>
                  </FormControl>
                  <FormControl>
                    <Input
                      placeholder="XXX-XXX-XXXX"
                      {...field}
                      className="py-6 bg-[#EFF6F8] appearance-none"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl className="max-w-sm">
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                    className="py-6 bg-[#EFF6F8] appearance-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormDescription className="text-right">
          <Link
            draggable={false}
            href={"#"}
            className="text-[var(--dark-primary-text)] font-light opacity-90 underline decoration-[var(--dark-primary-text)]"
          >
            Forget Password
          </Link>
        </FormDescription>
        <div className="flex justify-between">
          <Button
            type="submit"
            className="p-6 w-9/12 bg-[var(--primary-text)] text-white "
          >
            Login
          </Button>
          <Button className="p-6 bg-[#E2EBEF] rounded-none">
            <Fingerprint className="stroke-slate-600" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
