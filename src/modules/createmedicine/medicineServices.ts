import { MedicineFormData } from "./medicineInterface";
import { medicineModel } from "./medicineModel";

const medicineCreateServices = async (data: MedicineFormData) => {
  const result = await medicineModel.create(data);
  return result;
};

export const medicineServices = {
  medicineCreateServices,
};
