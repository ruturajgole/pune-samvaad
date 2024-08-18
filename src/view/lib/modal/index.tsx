import CloseIcon from '@mui/icons-material/Close';
import animate from '../animated';
import { Div, Text } from "../components";

export interface ModalProps {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly onClose: () => void;
}

export const Modal = ({title, children, onClose}: ModalProps) =>
  animate(<Div onClick={(e) => {e.stopPropagation(); e.preventDefault(); onClose();}} style={styles.container}>
    <Div style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <CloseIcon onClick={onClose} style={styles.close} fontSize={"large"}/>
    </Div>
    {children}
  </Div>);

const styles = {
  container: {
    position: "absolute",
    display: "flex",
    top: 0,
    left: 0,
    flexDirection:"column",
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    padding: ["2%", "2%", "0"]
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    width: "50%"
  },
  title: {
    fontSize: ["medium", "medium", "x-large"],
  },
  close: {
    cursor: "pointer"
  }
} as const;