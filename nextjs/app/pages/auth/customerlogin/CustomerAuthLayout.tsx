"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function CustomerAuthLayout({
  children,
  bottomlinks,
}: {
  children: React.ReactNode;
  bottomlinks?: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-[#00acc1] bg-cover bg-center "
      style={{ backgroundImage: 'url("/bg-pattern.png")' }}
    >
      <div className="flex flex-col justify-center items-center translate-y-[15%] ">
        <Card
          className="rounded-none top-0 right-0 left-0 h-[30%] w-[30%] pb-2"
          style={{
            backgroundImage: 'url("/bg-pattern-2.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "130%",
          }}
        >
          <CardContent className="px-2">
            <CardHeader className="flex flex-row justify-between items-start pt-4 pb-2 gap-4">
              <Button className="bg-[#6658dd] text-white hover:bg-[#574bbc] rounded cursor-pointer px-4 py-6 text-xs">
                Start <br /> Application
              </Button>
              <div className="flex-1 flex flex-col items-center">
                <span className="logo-lg cursor-pointer">
                  <Image
                    src={"/logo-light.png"}
                    alt=""
                    height="145"
                    width="145"
                  />
                </span>
              </div>
              <Link href={"/pages/auth/login"}>
                <Button className="bg-[#6658dd] text-white hover:bg-[#574bbc] rounded cursor-pointer px-4 py-3 text-xs">
                  Staff Login
                </Button>
              </Link>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </CardContent>
        </Card>
        {bottomlinks}
        {/* <Link href={bottomlinks}>
          <div className="mt-8 text-sm text-white/50 cursor-pointer">
            Forgot your password ?
          </div>
        </Link> */}
      </div>
    </div>
  );
}
