import React from "react"
import { ButtonProps, Button as MaterialButton, SxProps } from "@mui/material";

interface Props {
  readonly children: React.ReactNode;
  readonly onClick: () => void;
  readonly style?: SxProps;
  readonly props?: ButtonProps;
}

const Button = ({ children, onClick, props, style }: Props) =>
  <MaterialButton onClick={onClick} sx={style} {...props}>
    {children}
  </MaterialButton>

export default Button;