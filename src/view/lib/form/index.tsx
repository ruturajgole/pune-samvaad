import { BaseSyntheticEvent, useState } from "react";
import { Event } from "services/models";
import { Div, Text } from "../components";

interface Form {
  readonly event: Event;
  readonly email: string;
  readonly name: string;
  readonly mobile: number;
  readonly isStudent: boolean;
  readonly instution: string;
  readonly questions: string;
}

interface Props {
  readonly event: Event;
}

const RegistrationForm = ({ event }: Props) => {
  const [form, setForm] = useState<Form>();

  const askQuestion = `If you have any questions for ${form?.event.Guest}, please feel free to post them here`;
  
  const onFocus = (e: BaseSyntheticEvent) => {
    console.log("THERE");
    e.stopPropagation();
    e.preventDefault();
  };

  return <Div style={styles.container}>
    <Div>
      <Text style={styles.eventTitle}>{event.Title}</Text>
      <Text>Date - {event.Date}</Text>      
    </Div>
    <form style={styles.form}>
      <input onSelect={onFocus} type="email" value={form?.email} placeholder="Email*" required />
      <input onFocus={(e) => e.preventDefault()} type="text" value={form?.name} placeholder="Full Name*" required />
      <input onFocus={(e) => e.preventDefault()} type="number" value={form?.mobile} placeholder="Mobile*" required />
      <label><input type="radio" required />Student</label>
      <label><input type="radio" required />Non Student</label>
      <input onFocus={(e) => e.preventDefault()} type="text" value={form?.instution} placeholder="Institute/Organization (Studying/Working/Social Org Part of)" required />
      <input onFocus={(e) => e.preventDefault()} type="text" value={form?.questions} placeholder={askQuestion} />
    </form>
  </Div>
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    padding: "2%",
    width: "50%",
    height: "80%",
    borderRadius: "5%"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "2%"
  },
  eventTitle: {
    fontSize: "xx-large"
  },
  eventDetails: {
    
  }
} as const;

export default RegistrationForm;