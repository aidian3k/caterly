import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

interface NavigationLinkProps {
  label: string;
  path: string;
}

export default function NavigationLink({ label, path }: NavigationLinkProps) {
  const location = useLocation();

  return (
    <Nav.Link as={NavLink} to={path} active={location.pathname.includes(path)}>
      {label}
    </Nav.Link>
  );
}
