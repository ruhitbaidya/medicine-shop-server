import { model } from "mongoose";
import { MedicineFormData } from "./medicineInterface";
import { Schema } from "mongoose";

// Schema for ManufacturerDetails
const ManufacturerDetailsSchema = new Schema({
  name: { type: String, required: true }, // Manufacturer name
  address: { type: String, required: true }, // Manufacturer address
  contact: { type: String, required: true }, // Manufacturer contact
});

// Schema for Medicine
const MedicineSchema = new Schema<MedicineFormData>({
  name: { type: String, required: true }, // Medicine name
  description: { type: String, required: true }, // Medicine description
  discount: { type: Boolean, default: false },
  image: { type: String, required: true },
  discountPercentage: { type: Number, default: 0 },
  price: { type: Number, required: true, min: 0 }, // Medicine price (must be a positive number)
  stock_availability: { type: Number, required: true, min: 0 }, // Stock availability (must be a positive number)
  required_prescription: { type: Boolean, required: true }, // Whether a prescription is required
  manufacturer_details: { type: ManufacturerDetailsSchema, required: true }, // Manufacturer details
  expiry_date: { type: Date, required: true }, // Expiry date
});

// Create and export the Medicine model
export const medicineModel = model("medicine", MedicineSchema);
