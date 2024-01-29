import { PaginationType } from "./PaginationType";
import { TimeStampType } from "./TimeStampType";

export interface NoticeType extends TimeStampType {
  title: String;
  schedule_date: Date;
}

export interface NoticesType extends PaginationType {
  data: Array<NoticeType>;
}

export interface NoticeData {
  id?: number;
  title: string;
  schedule_date: string;
}
