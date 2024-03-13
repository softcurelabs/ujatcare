import { FlatType } from "./FlatType";
import { KeyValueType } from "./KeyValueType";
import { PaginationType } from "./PaginationType";
import { TimeStampType } from "./TimeStampType";
import { UserType } from "./UserType";

export interface InspectionType extends TimeStampType {
  title: string;
  notes: string;
  description: string;
  inspection_date: Date;
  status: string;
  priority: string;
  flat_id: number;
  user_id: number;
  inspection_by: UserType | Number;
  user?: UserType;
  flat?: FlatType;
  documents: Array<any>;
}

export interface InspectionsType extends PaginationType {
  data: Array<InspectionType>;
}

export const Status: KeyValueType = {
  "1": "Open",
  "2": "In Progress",
  "3": "Close",
};

export const Priority: KeyValueType = {
  "1": "Low",
  "2": "Medium",
  "3": "High",
};
