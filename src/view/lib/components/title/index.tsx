import { Div, Text } from "view/lib/components";

interface Props {
  readonly title: string;
}

const Title = ({ title }: Props) =>
  <Text style={styles.title}>{title}</Text>;

const styles = {
  title: {
    fontSize: "xxx-large"
  }
}

export default Title;