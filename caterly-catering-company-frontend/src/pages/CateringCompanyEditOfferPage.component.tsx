import { useParams } from "react-router-dom";

export default function CateringCompanyEditOfferPage() {
  const { cateringCompanyId, foodId } = useParams();

  return (
    <p>
      Firma {cateringCompanyId}, Posiłek: {foodId}
    </p>
  );
}
