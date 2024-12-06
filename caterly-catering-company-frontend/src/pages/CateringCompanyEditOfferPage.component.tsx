import { useParams } from "react-router-dom";

export default function CateringCompanyEditOfferPage() {
  const { id } = useParams();

  return <p>huj {id}</p>;
}
