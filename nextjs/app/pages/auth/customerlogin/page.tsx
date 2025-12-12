"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomerAuthLayout from "./CustomerAuthLayout";
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
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";

const loginSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  keepSignedIn: z.boolean().optional(),
});

const BottomLinks = () =>{
  return(
    <Link className="mt-8 text-sm text-white/50 cursor-pointer" href={"/pages/auth/forgetpassword"}><span>Forgot your Password</span></Link>
  )
}
export default function CustomerLogin() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      keepSignedIn: false,
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log("Login Submitted:", values);
  }

  return (
    <CustomerAuthLayout bottomlinks={<BottomLinks/>}>
      <div className=" text-gray-500">
        <div className="w-full flex-col flex space-y-4 text-center  py-6">
          <span className="flex justify-center items-center">
            <Label className="mt-4 text-lg text-center font-bold">
              North Park Manor & Fisgard House
            </Label>
          </span>
          <span className="text-sm font-bold">Tenant Login</span>
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        className="rounded-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 "
                        placeholder="Enter your password"
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
                Log in
              </Button>
            </form>
          </Form>
          <div className="text-sm">
            <p className="mb-1">
              Contact Office:{" "}
              <a
                className="text-[#6658dd]"
                href="mailto:office@northparkmanor.org"
              >
                office@northparkmanor.org
              </a>
            </p>
            <p>
              After Hours Maintenance:{" "}
              <a className="text-[#6658dd]" href="tel:250 812-0283">
                250 812-0283
              </a>
            </p>
          </div>
        </div>
      </div>
    </CustomerAuthLayout>
  );
}
