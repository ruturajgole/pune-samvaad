import React from "react"
import { Box, SxProps } from "@mui/material";

interface Props {
  readonly children: React.ReactNode;
  readonly style?: SxProps;
  readonly ref?: React.Ref<HTMLDivElement>;
  readonly id?: string;
}

const Div = ({ children, id, ref, style }: Props) =>
  <Box id={id} ref={ref} sx={style}>
    {children}
  </Box>

export default Div;