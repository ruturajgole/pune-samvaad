import { Box, SxProps } from "@mui/material";

interface Props {
  readonly src: string;
  readonly style?: SxProps;
  readonly onClick?: () => void;
}

const Image = ({ src, style }: Props) =>
  <Box
    component="img"
    src={src}
    sx={style} />

export default Image;