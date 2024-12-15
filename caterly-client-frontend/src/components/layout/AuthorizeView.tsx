import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";

interface AuthorizeViewProps {
  children: ReactNode;
}

export default function AuthorizeView({ children }: AuthorizeViewProps) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}
