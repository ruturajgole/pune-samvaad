import { SxProps, Typography } from "@mui/material";
import React from "react";


interface Props {
  readonly children: React.ReactNode;
  readonly style?: SxProps;
}

const Text = ({ children, style }: Props) =>
  <Typography sx={style}>
    {children}
  </Typography>

export default Text;