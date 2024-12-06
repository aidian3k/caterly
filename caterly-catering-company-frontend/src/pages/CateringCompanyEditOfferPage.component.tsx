import { useParams } from "react-router-dom";
import useOfferDetails from "../api/react-query/query/offer/offer-details.query";
import { CateringOfferDTO } from "../interfaces/offer/CateringOfferDTO";
import OfferDetailsForm from "../components/features/offer/OfferDetailsForm.component";

export default function CateringCompanyEditOfferPage() {
  const { cateringCompanyId, foodId } = useParams();
  const {
    data: offer,
    error,
    isError,
    isPending,
  } = useOfferDetails(cateringCompanyId, foodId);

  const handleSubmit = (offer: CateringOfferDTO): void => {
    // TODO
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Edytuj posiłek</h1>
      {isPending && <p>Ładowanie...</p>}
      {isError && <p>Wystąpił błąd: {error.message ?? "Nieznany błąd"}</p>}
      {offer && <OfferDetailsForm offer={offer} onSave={handleSubmit} />}
    </div>
  );
}
