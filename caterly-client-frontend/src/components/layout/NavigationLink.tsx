import { NavLink, useLocation } from "react-router-dom";

interface NavigationLinkProps {
  label: string;
  path: string;
}

export default function NavigationLink({ label, path }: NavigationLinkProps) {
  const location = useLocation();
  const isActive = location.pathname.includes(path);
  let linkStyle = "text-md hover:text-gray-800";

  if (isActive) {
    linkStyle += " font-bold";
  }

  return (
    <div className="p-1">
      <NavLink className={linkStyle} to={path}>
        {label}
      </NavLink>
    </div>
  );
}
