import { FC, MouseEventHandler, ReactNode } from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <Button startIcon={startIcon} endIcon={endIcon} {...props}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
