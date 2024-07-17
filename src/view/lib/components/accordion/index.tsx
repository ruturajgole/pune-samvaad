import {
  Accordion as AccordionMaterial,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Div from '../div';
import Text from "../text";

interface Props {
  readonly title: string;
  readonly item: React.ReactNode;
}

const Accordion = ({ title, item}: Props) =>
  <Div style={styles.container}>
    <AccordionMaterial>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Text style={styles.title}>{title}</Text>
      </AccordionSummary>
      <AccordionDetails>
        {item}
      </AccordionDetails>
    </AccordionMaterial>
  </Div>

const styles = {
  container: {
    width: '100%',
    margin: '1% 0%'
  },
  title: {
    fontSize: "large"
  }
}

export default Accordion;