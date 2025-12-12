"use client";

import Image from "next/image";
import ApplicationLayout from "./ApplicationLayout";
import { Card, CardContent } from "@/components/ui/card";
import BasicInputElements from "@/components/application/BasicInputElements";
export default function Create() {
  return (
    <ApplicationLayout>
      <div className="flex justify-center">
        <div className="w-full max-w-[70%] ">
          <Card className="p-6 text-gray-500 rounded-none px-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-12 mb-6 ">
                <div className="col-span-12 lg:col-span-2 flex justify-center lg:justify-start">
                  <Image
                    src={"/logo-light.png"}
                    alt="Logo"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="hidden lg:block lg:col-span-3"></div>
                <div className="col-span-12 lg:col-span-2 text-center lg:text-left text-sm mt-0">
                  875 North Park Street
                  <br />
                  Victoria B.C. V8W 3B8
                  <br />
                  (250) 383-7611
                </div>
                <div className="hidden lg:block lg:col-span-3"></div>
                <div className="col-span-12 lg:col-span-2 text-left">
                  <p className="text-sm font-medium">
                    Providing Non-profit
                    <br />
                    Housing For Seniors
                  </p>
                  <p className="mt-2 text-xs">
                    An Outreach of First Baptist
                    <br />
                    Church
                  </p>
                </div>
              </div>
              <div>
                <BasicInputElements />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ApplicationLayout>
  );
}
