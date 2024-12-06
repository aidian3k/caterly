import { useParams } from "react-router-dom";
import useOfferDetails from "../api/react-query/query/offer/offer-details.query";

export default function CateringCompanyEditOfferPage() {
  const { cateringCompanyId, foodId } = useParams();
  const {
    data: offer,
    error,
    isError,
    isPending,
  } = useOfferDetails(cateringCompanyId, foodId);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Edytuj posiłek</h1>
      {isPending && <p>Ładowanie...</p>}
      {isError && <p>Wystąpił błąd: {error.message ?? "Nieznany błąd"}</p>}
    </div>
  );
}
