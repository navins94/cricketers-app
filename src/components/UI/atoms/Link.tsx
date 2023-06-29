import { FC, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

interface LinkProps {
  to: string;
  color?: string;
  children?: ReactNode;
}

const LinkComponent: FC<LinkProps> = ({ to, children, color = "#fff" }) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to ?? "#"}
      underline="none"
      color={color}
    >
      {children}
    </MuiLink>
  );
};

export default LinkComponent;
