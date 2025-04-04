import mongoose from "mongoose";

export interface ManufacturerDetails {
  name: string;
  address: string;
  contact: string;
}

export interface MedicineFormData {
  name: string;
  description: string;
  price: number | string; // Allow both number and string for flexibility
  stock_availability: number | string; // Allow both number and string for flexibility
  required_prescription: boolean;
  discount: boolean;
  image: string;
  discountPercentage: number;
  manufacturer_details: ManufacturerDetails;
  expiry_date: Date;
}
