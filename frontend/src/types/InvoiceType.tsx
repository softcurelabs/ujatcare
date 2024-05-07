import { FlatType } from "./FlatType";
import { KeyValueType } from "./KeyValueType";
import { PaginationType } from "./PaginationType";
import { TimeStampType } from "./TimeStampType";
import { UserType } from "./UserType";

export interface InvoiceType extends TimeStampType {
  quickbook_id: number;
  description: string;
  due_date: Date;
  status: string;
  flat_id: number;
  user_id: number;
  user?: UserType;
  flat?: FlatType;
  items: Array<InvoiceItemType>;
}

export interface InvoiceEditType {
  due_date: Date;
  id: Number;
  invoice_status: string;
  name: string;
  total: number;
}

export interface InvoiceItemType extends TimeStampType {
    invoice_id: number;
    name: string;
    total: number;
    qty: number;
}

export interface InvoicesType extends PaginationType {
  data: Array<InvoiceType>;
}

export const Status: KeyValueType = {
  "0": "Unpaid",
  "1": "Payment Failed",
  "2": "Paid",
};
