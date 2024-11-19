import CateringCompanyEntity from "./CateringCompanyEntity";

interface CateringFoodEntity {
  id: number;
  typeOfFood: string;
  price: string;
  cateringEntity: CateringCompanyEntity;
}

export default CateringFoodEntity;