import CloseIcon from '@mui/icons-material/Close';
import animate from '../animated';

export interface ModalProps {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly onClose: () => void;
}

export const Modal = ({title, children, onClose}: ModalProps) =>
  animate(<div onClick={(e) => {e.stopPropagation(); e.preventDefault(); onClose();}} style={styles.container}>
    <div style={styles.header}>
      <span>{title}</span>
      <CloseIcon onClick={onClose} style={styles.close} fontSize={"large"}/>
    </div>
    {children}
  </div>);

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
    width: "100%"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    fontSize: "x-large",
    width: "50%"
  },
  close: {
    cursor: "pointer"
  }
} as Record<string, React.CSSProperties>;