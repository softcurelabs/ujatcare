"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthLayout from "../login/AuthLayout";

const loginSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
});
const BottomLinks = () =>{
  return(
    <span className="mt-8 text-sm text-white/50">Back to <Link className="text-white cursor-pointer font-bold" href={"/pages/auth/login"}><span>Login</span></Link></span>
  )
}

export default function ForgetPassword() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log("Login Submitted:", values);
  }

  return (
    <AuthLayout bottomlinks={<BottomLinks/>}>
      <div className="text-gray-500">
        <div className="w-full  flex-col flex space-y-8 text-center py-6">
          <span className="text-sm  px-8 ">
            <span>
              Enter your email address and we&apos;ll send you an email with
              instructions to reset your password.
            </span>
          </span>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 "
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#6658dd] text-white hover:bg-[#574bbc] rounded cursor-pointer"
              >
                Reset Password
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </AuthLayout>
  );
}
