"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

type Props = {};

// TODO: add more while development
export const FormSchema = z.object({
  phoneNumber: z.string().max(10).min(10),
});

const MobileForm = (props: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="justify-center space-y-6 mx-auto"
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
                        className="!cursor-default w-full py-6 bg-[#EFF6F8] appearance-none text-right sm:pr-5  !text-sm disabled:opacity-100"
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
              </FormItem>
            )}
          />
        </div>
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

export default MobileForm;
