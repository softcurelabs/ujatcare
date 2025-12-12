import { PaginationType } from "./PaginationType";
import { TimeStampType } from "./TimeStampType";

export interface FlatType {
  flat_id: number;
}
export interface UserType extends TimeStampType {
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  flat?: FlatType;
  flat_name?: string;
  apartment_name?: string;
  apartment_id?: number;
  documents: Array<UserDocumentType>;
}

export interface UserDocumentType extends TimeStampType {
  document_name: string;
  document_path: string;
  type: number;
}

export interface UserProfileType extends TimeStampType {
  unit: number;
  phone_number: string;
  parking_space: number;
  locker: number;
  emergency_contact_number: string;
  emergency_contact_name: string;
  income_verification: number;
  rent_calculation: number;
  relationship: string;
  movein_date: Date;
  language: string;
  fob: string;
  staff_notes: string;
  special_instruction: null | string;
  image_path: null | string;
  user: UserType;
  quickbook_id: number|null;
}

export interface UserEditType extends TimeStampType {
  unit: number;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  parking_space: number;
  locker: number;
  apartment_id: number;
  flat_id: number;
  emergency_contact_number: string;
  emergency_contact_name: string;
  income_verification: number;
  rent_calculation: number;
  language: string;
  relationship: string;
  movein_date: Date;
  birth_date: Date;
  staff_notes: string;
  special_instruction: null | string;
  image_path: null | string;
  profile_pic: null | string;
  user: UserType;
  fob: string;
}

export interface UsersType extends PaginationType {
  data: Array<UserProfileType>;
}

export interface UserData {
  id?: number;
  email: string;
  name: string;
  first_name: string;
  apartment_id?: number;
  last_name: string;
  flat_id?: number;
  role_id?: string;
}

export interface UserProfileDataType {
  unit: number;
  phone_number: string;
  parking_space: number;
  emergency_contact_number: string;
  emergency_contact_name: string;
  income_verification: number;
  rent_calculation: number;
  language: string;
  special_instruction: null | string;
  image_path: null | string;
  user: UserType;
}

export interface PasswordDataType {
  id: number;
  password: string;
}

export interface UserPermissionType {
  id: number;
  email: string;
  apartment_id?: number;
  flat_id?: number;
  role_id?: string;
}

export interface UploadataType {
  id: number;
  file: string;
}

export interface BugDataType {
  title: string;
  description: string;
  documents: Array<string>;
}
