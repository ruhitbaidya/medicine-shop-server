import { MedicineFormData } from "./medicineInterface";
import { medicineModel } from "./medicineModel";

const medicineCreateServices = async (data: MedicineFormData) => {
  const result = await medicineModel.create(data);
  return result;
};

const medicineUpdateServices = async (id: string, data: MedicineFormData) => {
  const result = await medicineModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};

const medicineGetSingalServices = async (id: string) => {
  const result = await medicineModel.findOne({ _id: id });
  return result;
};
export const medicineServices = {
  medicineCreateServices,
  medicineUpdateServices,
  medicineGetSingalServices,
};
