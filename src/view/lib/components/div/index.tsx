import React from "react"
import { Box, SxProps } from "@mui/material";

interface Props {
  readonly children: React.ReactNode;
  readonly style?: SxProps;
  readonly ref?: React.Ref<HTMLDivElement>;
  readonly id?: string;
  readonly className?: string;
}

const Div = ({ children, className, id, ref, style }: Props) =>
  <Box className={className} id={id} ref={ref} sx={style}>
    {children}
  </Box>

export default Div;