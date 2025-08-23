import React from "react";
export function Link({ to = "#/", className = "", children }) {
  const onClick = (e) => {
    if (to.startsWith("#")) {
      e.preventDefault();
      location.hash = to.slice(1);
    }
  };
  return (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
