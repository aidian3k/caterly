import { useNavigate, useParams } from "react-router-dom";
import useOfferDetails from "../api/react-query/query/offer/offer-details.query";
import OfferDetailsForm from "../components/features/offer/OfferDetailsForm.component";
import EditOfferRequest from "../interfaces/offer/EditOfferRequest";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axiosConfig";
import { queryClient } from "../api/react-query/queryClient";

export default function CateringCompanyEditOfferPage() {
  const { cateringCompanyId, foodId } = useParams();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const editMeal = useMutation({
    mutationFn: async (updatedMeal: EditOfferRequest) => {
      await axiosInstance.put(
        `/api/offers/${cateringCompanyId}/${foodId}`,
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
  const navigate = useNavigate();
  const {
    data: offer,
    error,
    isError,
    isPending,
  } = useOfferDetails(cateringCompanyId, foodId);

  const handleSubmit = (offer: EditOfferRequest): void => {
    editMeal.mutate(offer);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Edytuj posiłek</h1>
      {isPending && <p>Ładowanie...</p>}
      {isError && <p>Wystąpił błąd: {error.message ?? "Nieznany błąd"}</p>}
      {offer && <OfferDetailsForm offer={offer} onSave={handleSubmit} />}
      {submitError && <p>Błędne dane formularza: {submitError}</p>}
    </div>
  );
}
