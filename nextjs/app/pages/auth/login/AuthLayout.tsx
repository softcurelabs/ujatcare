"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function AuthLayout({
  children,
  bottomlinks,
}: {
  children: React.ReactNode;
  bottomlinks: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-[#00acc1] bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg-pattern.png")' }}
    >
      <div className="flex flex-col justify-center items-center translate-y-[15%] ">
        <Card
          className="rounded-none top-0 right-0 left-0 h-[30%] w-[28%] pb-2"
          style={{
            backgroundImage: 'url("/bg-pattern-2.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "130%",
          }}
        >
          <CardContent className="px-2">
            <CardHeader className="flex justify-center items-center pt-4 pb-2">
              <span className="logo-lg cursor-pointer">
                <Image
                  src={"/logo-light.png"}
                  alt=""
                  height="145"
                  width="145"
                />
              </span>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </CardContent>
        </Card>
        {bottomlinks}
      </div>
    </div>
  );
}
