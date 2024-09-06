"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormLabel,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type Props = {
  className?: string;
  placeholder?: string;
};
export const FormSchema = z.object({
  q: z.string(),
});

const Search = ({ className, placeholder = "search" }: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      q: "",
    },
  });
  async function onSubmit(values: z.infer<typeof FormSchema>) {}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={className}
      >
        <FormField
          control={form.control}
          name="q"
          render={({ field }) => (
            <FormItem className="flex rounded pl-2 space-y-0 space-x-1 items-center bg-[#EFF6F8] appearance-none">
              <FormLabel
                children={<SearchIcon className="size-4 stroke-slate-400" />}
              />
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="h-12 px-1 border-0  space-y-0 focus-visible:ring-0 focus-visible:ring-offset-0 appearance-none bg-transparent"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default Search;
