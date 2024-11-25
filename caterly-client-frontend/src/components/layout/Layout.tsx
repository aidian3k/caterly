import Navigation from "./Navigation";
import { Navigate, useOutlet } from "react-router-dom";

export default function Layout() {
  const outlet = useOutlet();

  return (
    <div className="md:container md:mx-auto">
      <Navigation />
      {outlet ?? <Navigate to="dashboard" />}
    </div>
  );
}
