import { TimeStampType } from "./TimeStampType";

export interface FlatType {
  id: number;
  name: String;
  apartment_id: number;
  created_at: Date;
  updated_at: Date;
  has_occupied: boolean;
  apartment: ApartmentType
}

export interface FlatEditType extends TimeStampType {
    name: string;
    apartment_id: number;
}

export interface ApartmentType extends TimeStampType {
  name: string;
}

export interface ApartmentListType {
    id: number;
    name: String;
    created_at: Date;
    updated_at: Date;
    flats: Array<FlatType>;
  }
  