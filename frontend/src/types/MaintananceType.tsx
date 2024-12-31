import { PaginationType } from "./PaginationType";
import { TimeStampType } from "./TimeStampType";
import { UserType } from "./UserType";

export interface MaintananceType extends TimeStampType {
  user_id: number;
  flat_id: number;
  status: number;
  tanent_name: string;
  phone: string;
  ok_to_enter: number;
  work_requested: string;
  tanent_signature: string;
  service_signature: string | null;
  action_taken: 2 | null;
  action_date: Date | null;
  time_in: string | null;
  time_out: string | null;
  work_done: string | null;
  chargable: number | null;
  repaired_by: number | null;
  user_name: string;
  repaired_username: string;
  status_name: string;
  flat_name: string;
}

export interface MaintananceData {
  id?: number;
  user_id: number;
  flat_id: number;
  status: string;
  tanent_name: string;
  phone: string;
  ok_to_enter: string;
  work_requested: string;
  tanent_signature: string;
  service_signature: string | null;
  action_taken: string | null;
  action_date: Date | null;
  time_in: string | null;
  time_out: string | null;
  work_done: string | null;
  chargable: string | null;
  repaired_by: number | null;
  repaired_username: string;
  status_name: string;
}

export interface Conversation extends TimeStampType {
    message: String;
    sender_id: number;
    sender?: UserType;
}

export interface ConversationData {
    message: string;
    sender_id: number;
    maintanance_id: string;
}

export interface MaintanancesType extends PaginationType {
  data: Array<MaintananceType>;
}

export interface DashboardType {
  total: number;
  close: number;
  pending: number;
  in_progress: number;
}
