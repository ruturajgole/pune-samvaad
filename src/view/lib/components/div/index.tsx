import React, { BaseSyntheticEvent } from "react"
import { Box, SxProps } from "@mui/material";

interface Props {
  readonly children: React.ReactNode;
  readonly style?: SxProps;
  readonly ref?: React.Ref<HTMLDivElement>;
  readonly id?: string;
  readonly className?: string;
  readonly onClick?: (e: BaseSyntheticEvent) => void;
}

const Div = ({ children, onClick, className, id, ref, style }: Props) =>
  <Box onClick={onClick} className={className} id={id} ref={ref} sx={style}>
    {children}
  </Box>

export default Div;