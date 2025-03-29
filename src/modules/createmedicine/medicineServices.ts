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

const filterMedicineServices = async (data: any) => {
  let filter = {};
  let sort = {};
  if (data.sort === "htl") {
    sort = { price: -1 };
  }
  if (data.sort === "lth") {
    sort = { price: 1 };
  }
  if (data.category) {
    filter = { "manufacturer_details.name": data.category };
  }
  if (data.pcheck === true) {
    filter = { required_prescription: data.pcheck };
  }
  if (data.pcheck === false) {
    filter = { required_prescription: data.pcheck };
  }
  if (data.h || data.l) {
    const minPrice = parseInt(data.l);
    const maxPrice = parseInt(data.h);
    filter = {
      price: { $gte: minPrice, $lte: maxPrice }, // Corrected: minPrice should be used with $gte, and maxPrice with $lte
    };
  }

  const result = await medicineModel.find(filter).sort(sort);
  return result;
};

const hightRateMedicineServices = async () => {
  const query = {
    price: { $gt: 4000 },
  };
  const result = await medicineModel.find(query).limit(4);
  return result;
};

const makeDiscountMedicineServices = async (
  medicineId: string[],
  discount: number
) => {
  if (!medicineId || medicineId.length === 0) {
    throw new Error("Does not send any product id");
  }
  const result = await medicineModel.updateMany(
    { _id: { $in: medicineId } },
    { $set: { discountPercentage: discount, discount: true } }
  );

  return result;
};

const discountMedicineServices = async () => {
  const result = await medicineModel.find({ discount: true });
  return result;
};

export const medicineServices = {
  medicineCreateServices,
  medicineUpdateServices,
  medicineGetSingalServices,
  filterMedicineServices,
  hightRateMedicineServices,
  discountMedicineServices,
  makeDiscountMedicineServices,
};
