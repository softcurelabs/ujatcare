import { KeyValueType } from "./KeyValueType";
import { PaginationType } from "./PaginationType";
import { TimeStampType } from "./TimeStampType";
import { UserType } from "./UserType";

export interface ApplicationType extends TimeStampType {
  //   email: string;
  cash_balance: number;
  city: string;
  current_address: string;
  email: string;
  first_language: string;
  first_name_first: string;
  first_name_second: string;
  gender_first: number;
  gender_second: number;
  hc_age_first: number;
  hc_birth_date_first: Date;
  hc_disability_first: number;
  hc_gender_first: number;
  hc_last_name_first: string;
  hc_gender_second: string;
  accomodation: string;
  hc_relationship_first: string;
  hc_wheelchair_first: number;
  home_phone_first: number;
  home_phone_second: number;
  ii_income_first: number;
  ii_income_second: number;
  ii_income_source_first: string;
  ii_income_source_second: string;
  ii_last_name_first: string;
  ii_last_name_second: string;
  landlord_name_first: string;
  landlord_name_second: string;
  landlord_name_third: string;
  landlord_phone_first: number;
  landlord_phone_second: number;
  landlord_phone_third: number;
  last_name_first: string;
  last_name_second: string;
  long_term: string;
  monthly_includes: string;
  monthly_rent: number;
  postal_code: string;
  prov: string;
  rh_address_first: string;
  rh_address_second: string;
  rh_address_third: string;
  rh_end_date_first: Date;
  rh_end_date_second: Date;
  rh_end_date_third: Date;
  rh_start_date_first: Date;
  rh_start_date_second: Date;
  rh_start_date_third: Date;
  second_language: string;
  signature_first: string;
  signature_second: string;
  stock_deposit: number;
  translator_required: number;
  under_notice: number;
  value_real_estate: number;
  wish_to_move: number;
  hc_birth_date_second: Date;
  hc_last_name_second: string;
  hc_first_name_second: string;
  hc_age_second: number;
  hc_relationship_second: string;
  hc_disability_second: string;
  hc_wheelchair_second: number;
  hc_first_name_first: string;
  value_morgages: number;
  value_others: number;
  status?: number;
  documents: Array<any>;
  approved_by?: UserType;
}

export interface DocumentType extends TimeStampType {
  document_name: string;
}

export interface ApplicationsType extends PaginationType {
  data: Array<ApplicationType>;
}

export interface AssignFlatType {
  flat_id: number;
  id: Number;
}

export const gender: KeyValueType = {
  "1": "Mr.",
  "2": "Miss.",
  "3": "Mrs.",
  "4": "Ms.",
};

export const sex: KeyValueType = {
  "1": "Male",
  "2": "Female",
};

export const boolType: KeyValueType = {
  "1": "Yes",
  "2": "No",
};
