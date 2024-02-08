import { PaginationType } from "./PaginationType";
import { TimeStampType } from "./TimeStampType";

export interface FlatType {
  flat_id: number;
}
export interface UserType extends TimeStampType {
  name: string;
  email: string;
  role: string;
  flat?: FlatType;
  flat_name?: string;
  apartment_name?: string;
}

export interface UserProfileType extends TimeStampType {
  unit: Number;
  phone_number: string;
  parking_space: Number;
  emergency_contact_number: string;
  emergency_contact_name: string;
  income_verification: Number;
  rent_calculation: Number;
  relationship: string;
  movein_date: Date;
  language: string;
  special_instruction: null | string;
  image_path: null | string;
  user: UserType;
}

export interface UserEditType extends TimeStampType {
  unit: Number;
  name: string;
  email: string;
  phone_number: string;
  parking_space: Number;
  flat_id: Number;
  emergency_contact_number: string;
  emergency_contact_name: string;
  income_verification: Number;
  rent_calculation: Number;
  language: string;
  relationship: string;
  movein_date: Date;
  special_instruction: null | string;
  image_path: null | string;
  user: UserType;
}

export interface UsersType extends PaginationType {
  data: Array<UserProfileType>;
}

export interface UserData {
  id?: number;
  email: string;
  name: string;
  flat_id?: Number;
  role_id?: string;
}

export interface UserProfileDataType {
  unit: Number;
  phone_number: string;
  parking_space: Number;
  emergency_contact_number: string;
  emergency_contact_name: string;
  income_verification: Number;
  rent_calculation: Number;
  language: string;
  special_instruction: null | string;
  image_path: null | string;
  user: UserType;
}

export interface PasswordDataType {
  id: Number;
  password: string;
}

export interface UserPermissionType {
  id: Number;
  email: string;
  flat_id?: Number;
  role_id?: string;
}

export interface UploadataType {
  id: Number;
  file: string;
}
