import { useNavigate, useParams } from "react-router-dom";
import useOfferDetails from "../api/react-query/query/offer/offer-details.query";
import OfferDetailsForm from "../components/features/offer/OfferDetailsForm.component";
import EditOfferRequest from "../interfaces/offer/EditOfferRequest";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axiosConfig";
import { queryClient } from "../api/react-query/queryClient";

export default function CateringCompanyEditOfferPage() {
  const { cateringCompanyId, offerId } = useParams();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const navigate = useNavigate();
  const offer = useOfferDetails(cateringCompanyId, offerId);
  const editMeal = useMutation({
    mutationFn: async (updatedMeal: EditOfferRequest) => {
      await axiosInstance.put(
        `/api/offers/${cateringCompanyId}/${offerId}`,
        updatedMeal,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["offer"] }).then(() => {
        navigate("/offer");
      });
    },
    onError: (err) => {
      setSubmitError(err.message);
    },
  });

  const handleSubmit = (offer: EditOfferRequest): void => {
    editMeal.mutate(offer);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Edytuj posiłek</h1>
      {offer.isPending && <p>Ładowanie...</p>}
      {offer.isError && (
        <p>Wystąpił błąd: {offer.error.message ?? "Nieznany błąd"}</p>
      )}
      {offer.data && (
        <OfferDetailsForm offer={offer.data} onSave={handleSubmit} />
      )}
      {editMeal.isPending && <p>Aktualizowanie...</p>}
      {submitError && <p>Błędne dane formularza: {submitError}</p>}
    </div>
  );
}
