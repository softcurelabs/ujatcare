"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AddMemberProps {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
}

export default function GeneralInfo({ show, onHide, onSubmit }: AddMemberProps) {
  return (
    <Dialog open={show} onOpenChange={onHide}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>General Information</DialogTitle>
        </DialogHeader>

        {/* Scrollable large content */}
        <ScrollArea className="h-[70vh] pr-4 text-base">
          <div className="space-y-4">
            <p>NPMS provides subsidized housing – rent is based on income.</p>
            <p>
              Rent is currently based on 30% of income (exception sponsored
              non-Canadian residents.)
            </p>
            <p>NPMS has 2 buildings with 210 units.</p>

            <p className="font-semibold">Fisgard House – 6 storey building – 844 Fisgard Street</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>2 elevators, 1 common laundry ($2.00 wash/$2.00 dry)</li>
              <li>Underground secured parking (based on availability)</li>
              <li>48 small one bedroom for singles</li>
              <li>4 one bedroom for couples</li>
              <li>2 Mobility Friendly</li>
            </ul>

            <p className="font-semibold mt-4">
              North Park Manor – 16 storey high rise – 875 North Park Street
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>2 elevators, 2 laundry facilities ($2.00 wash/$2.00 dry)</li>
              <li>Underground secured parking (based on availability)</li>
              <li>24 one bedroom for couples</li>
              <li>134 bachelors</li>
              <li>4 Mobility Friendly</li>
            </ul>

            <p className="mt-2">Crime free rated building, secured entrances, camera monitoring.</p>

            <p className="font-semibold">Applicants – Minimum Requirements:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Age – 55 plus</li>
              <li>Income – single under $28,000 – couple under $33,500</li>
              <li>Market rate tenants being accepted.</li>
              <li>BC resident for at least 1 year</li>
              <li>100% Non-Smoking Building/Property</li>
              <li>No Pets (Service Animals may be approved with certification)</li>
            </ul>

            <p className="font-semibold mt-4">Applicants – Required Documents:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>3 months of bank statements</li>
              <li>3 months of pay stubs</li>
              <li>Most recent Tax Assessment</li>
              <li>E.I. or W.C.B payment documents</li>
              <li>Seniors 65+ require Rate Benefit Letter</li>
              <li>Assets over $10,000</li>
              <li>Non-citizens require confirmation of status</li>
            </ul>

            <p className="font-semibold mt-4">Wait List FAQs</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Wait list minimum is at least 3 months</li>
              <li>Contact NPMS directly for accurate vacancy info</li>
              <li>Priority may change based on need/availability</li>
              <li>Applicants contacted only when shortlisted</li>
              <li>Credit checks may be done</li>
              <li>
                Keep application updated every 3 months with current bank statements
              </li>
              <li>Ensure all required documents are included</li>
            </ul>
          </div>
        </ScrollArea>

        <DialogFooter>
          <button
            onClick={onHide}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Close
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
