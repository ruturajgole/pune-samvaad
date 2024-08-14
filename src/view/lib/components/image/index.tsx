import { Box, SxProps } from "@mui/material";

interface Props {
  readonly src: string;
  readonly style?: SxProps;
  readonly onClick?: () => void;
}

const Image = ({ src, onClick, style }: Props) =>
  <Box
    loading="lazy"
    referrerPolicy="no-referrer"
    onClick={onClick}
    component="img"
    src={src}
    sx={style} />

export default Image;