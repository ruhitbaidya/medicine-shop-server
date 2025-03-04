import { z } from "zod";

const ManufacturerDetailsSchema = z.object({
  name: z.string().min(1, "Manufacturer name is required"),
  address: z.string().min(1, "Manufacturer address is required"),
  contact: z.string().min(1, "Manufacturer contact is required"),
});

const MedicineFormDataSchema = z.object({
  name: z.string().min(1, "Medicine name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.preprocess(
    (val) => (typeof val === "string" ? parseFloat(val) : val),
    z.number().min(0, "Price must be a positive number")
  ),
  stock_availability: z.preprocess(
    (val) => (typeof val === "string" ? parseFloat(val) : val),
    z.number().min(0, "Stock must be a positive number")
  ),
  required_prescription: z.preprocess(
    (val) => (val === "true" ? true : val === "false" ? false : val),
    z.boolean()
  ),
  manufacturer_details: ManufacturerDetailsSchema,
  expiry_date: z.string().min(1, "Expiry date is required"),
});

export default MedicineFormDataSchema;
