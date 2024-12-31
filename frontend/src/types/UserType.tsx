import { PaginationType } from "./PaginationType";
import { TimeStampType } from "./TimeStampType";

export interface FlatType {
    id: number;
  flat_id: number;
}
export interface UserType extends TimeStampType {
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  phone_number: string;
  flat?: FlatType;
  flat_id?: Number;
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
  unit: Number;
  phone_number: string;
  parking_space: Number;
  locker: Number;
  emergency_contact_number: string;
  emergency_contact_name: string;
  income_verification: Number;
  total_rent: Number;
  relationship: string;
  movein_date: Date;
  language: string;
  fob: string;
  staff_notes: string;
  special_instruction: null | string;
  image_path: null | string;
  user: UserType;
  quickbook_id: number|null;
  emergency_contact_email: string;
        base_rent: Number;
        utilities: Number;
        maintenance_fees: Number;
        property_taxes: Number;
        rental_insurance: Number;
        parking_fees: Number;
        service_fees: Number;
        administrative_fees: Number;
        storage_fees: Number;
        cable_fees: Number;
        wifi: Number;
        floor_plan: string
}

export interface UserEditType extends TimeStampType {
  unit: Number;
  name: string;
  first_name: string;
  last_name: string;
  apartment_id: Number;
  email: string;
  phone_number: string;
  parking_space: Number;
  locker: Number;
  flat_id: Number;
  emergency_contact_number: string;
  emergency_contact_name: string;
  income_verification: Number;
  total_rent: Number;
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
  emergency_contact_email: string;
        base_rent: Number;
        utilities: Number;
        maintenance_fees: Number;
        property_taxes: Number;
        rental_insurance: Number;
        parking_fees: Number;
        service_fees: Number;
        administrative_fees: Number;
        storage_fees: Number;
        cable_fees: Number;
        wifi: Number;
        floor_plan: string;
}

export interface UsersType extends PaginationType {
  data: Array<UserProfileType>;
}

export interface UserData {
  id?: number;
  email: string;
  phone_number: string;
  name: string;
  apartment_id?: number;
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
  total_rent: Number;
  language: string;
  special_instruction: null | string;
  image_path: null | string;
  user: UserType;
  emergency_contact_email: string;
        base_rent: Number;
        utilities: Number;
        maintenance_fees: Number;
        property_taxes: Number;
        rental_insurance: Number;
        parking_fees: Number;
        service_fees: Number;
        administrative_fees: Number;
        storage_fees: Number;
        cable_fees: Number;
        wifi: Number;
        floor_plan: string;
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

export interface BugDataType {
  title: string;
  description: string;
  documents: Array<string>;
}
