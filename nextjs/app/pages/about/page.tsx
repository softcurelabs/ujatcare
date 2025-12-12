"use client";

import Image from "next/image";
import Link from "next/link";
import AboutLayout from "./layout";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <AboutLayout>
      <div className="max-w-7xl mx-auto px-4">
        <Card className="px-6 py-8 rounded-none text-gray-500">
          <CardContent>
            <div className="grid grid-cols-12 items-center mb-8">
              <div className="col-span-12 lg:col-span-2"></div>
              <div className="col-span-12 lg:col-span-3"></div>

              <div className="col-span-12 lg:col-span-2 flex justify-center">
                <Image
                  src="/logo-light.png"
                  alt="Logo"
                  width={150}
                  height={150}
                />
              </div>

              <div className="col-span-12 lg:col-span-3"></div>

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

            {/* Content */}
            <div className="space-y-4 text-sm/6">
              <h2 className="text-center text-black text-3xl font-semibold">
                Our Story
              </h2>

              <p className="text-justify">
                North Park Manor Society was built on the shoulders of the
                founding 15 pioneers of the First Baptist Church, Victoria BC,
                in 1876. This was the first Baptist cause inaugurated in British
                Colombia. In 1877, the Baptist Chapel and North Star Mission
                were built on Pandora Avenue.
              </p>

              <p className="text-justify">
                The following 100+ years are filled with stories of church
                members serving their congregation and Victoria, BC. In 1964,
                the congregation voted to purchase property on Quadra Street
                between North Park Street and Fisgard Street to build a new
                church. This new property was more than they needed to home the
                new church, and the building committee began investigating the
                possibility of adding low rental apartments to the property. In
                1972 the need was great, and the congregation was up for the
                project.
              </p>

              <p className="text-justify">
                Building low-income housing required the church to establish
                this project as its own entity under the Societies Act. Much
                credit goes to Margaret Salmond, Bob Jupe, and Peggy McFadyen
                for spearheading the government grants for the project.{" "}
                <b>North Park Manor</b> apartment complex was dedicated and
                opened on April 24, 1976. The 134 bachelor apartments, and 24
                one-bedroom apartments continue to be subsidized by BC housing
                and support the continued need for low-income housing for the
                55+ community. <b>Fisgard House</b> was officially dedicated and
                opened April 30, 1988, providing 52 units of affordable
                one-bedroom apartments for the 55+ community.
              </p>

              <p className="text-justify">
                North Park Manor Society is grateful for the First Baptist
                Church vision and generosity. They have made an incredible
                difference for the city of Victoria and those that have been
                blessed to reside in the North Park Manor Society properties.
                Community support of North Park Manor Society continues to be
                important in the maintenance of these facilities. Please contact{" "}
                <a
                  href="mailto:office@northparkmanor.org"
                  className="text-blue-600 underline"
                >
                  office@northparkmanor.org
                </a>{" "}
                to volunteer or donate.
              </p>

              <p className="font-semibold">APPLICATIONS</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Age Requirement - 55+</li>
                <li>No pets. Non-smoking property.</li>
                <li>Rent based on income.</li>
                <li>
                  Independent living – supportive services are not offered.
                </li>
              </ul>

              <p>
                <Link href="/pages/application" className="text-blue-600 ">
                  Complete this online application
                </Link>
              </p>

              <p className="font-semibold">LOCATION</p>

              <p>
                <b>North Park Manor</b>
                <br />
                875 North Park St., Victoria BC, V8W 3B6
              </p>

              <p>
                <b>Fisgard House</b>
                <br />
                844 Fisgard St., Victoria BC. V8W 3M5
              </p>

              <p>Phone: 250 383-7611</p>

              <p>
                <Link href="/pages/auth/login" className="text-blue-600 ">
                  Staff Login
                </Link>
              </p>

              <p>
                <Link
                  href="/pages/auth/customerlogin"
                  className="text-blue-600 "
                >
                  Tenant Login
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AboutLayout>
  );
}
