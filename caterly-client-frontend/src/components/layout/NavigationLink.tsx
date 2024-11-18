import { NavLink, useLocation } from "react-router-dom";
import { CSSProperties } from "react";
import styles from "./NavigationLink.module.css";

interface NavigationLinkProps {
  label: string;
  path: string;
}

export default function NavigationLink({ label, path }: NavigationLinkProps) {
  const location = useLocation();
  const isActive = location.pathname.includes(path);
  const linkStyle: CSSProperties = isActive ? { fontWeight: 700 } : {};

  return (
    <div className={styles.navigationItem}>
      <NavLink style={linkStyle} to={path}>
        {label}
      </NavLink>
    </div>
  );
}
