import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import { Event, Form } from "services/models";
import { Button, Div, Text } from "../components";
import { PushPin, TaskAlt } from "@mui/icons-material";
import { register } from "services/api";
import { Loader } from "../loader";

interface Props {
  readonly event: Event;
  readonly onClose: () => void;
}

enum Status {
  Unsubmitted,
  Submitting,
  Submitted
}

const RegistrationForm = ({ event, onClose }: Props) => {
  const defaultForm: Form = {
    event,
    email: "",
    name: "",
    mobile: "",
    isStudent: false,
    institution: "",
    questions: ""
  };

  const [form, setForm] = useState<Form>(defaultForm);
  const [status, setStatus] = useState<Status>(Status.Unsubmitted);

  const changeStudent = (e: BaseSyntheticEvent) => {
    const { value } = e.target;

    setForm({...form, isStudent: value == "student"});
  }

  const changeValue = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value});
  }

  const submitForm = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const currentForm = e.target;
    if(!currentForm.checkValidity()){
      currentForm.reportValidity();
      return;
    }

    setStatus(Status.Submitting);
    const status = await register(form);

    if(status === 200){
      setStatus(Status.Submitted);
    }
  }

  const askQuestion = `If you have any questions for ${form?.event.Guest}, please feel free to post them here`;
  
  const onFocus = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
  };

  const loading = status === Status.Submitting;

  return <Div onClick={onFocus} style={styles.container}>
    {loading && <Div style={styles.loader}><Loader /></Div>}
    {status === Status.Unsubmitted && <><Div style={{...(loading && styles.loading)}}>
      <Text style={styles.eventTitle}>{event.Title}</Text>
      {event.Summary && <Text>{event.Summary}</Text>}
      <Text>Date - {event.Date}</Text>
      {event.Time && <Text>Time - {event.Time} onwards</Text>}
      <Text style={styles.venue}>Venue - <PushPin fontSize="small"/> {event.Venue}</Text>
      {event.Map && <a id="map" href="https://maps.app.goo.gl/sBuRdVn2SjH4YFGb7" target="_blank">Click For Location</a>}
    </Div>
    <form onSubmit={submitForm} id={"form"} style={{...styles.form, ...(loading && styles.loading)}}>
      <input onChange={changeValue} name="email" style={styles.input} type="email" value={form?.email} placeholder="Email*" required />
      <input onChange={changeValue} name="name" style={styles.input} type="text" value={form?.name} placeholder="Full Name*" required />
      <input pattern={"\d{10}"} title={"Please enter a valid 10 digit mobile number"} onChange={changeValue} name="mobile" style={styles.input} type="text" value={form?.mobile} placeholder="Mobile*" required />
      <label htmlFor="student" style={styles.input}>
      <input onChange={changeStudent} name="isStudent" id="student" type="radio" value="student"/>Student</label>
      <label htmlFor="non_student" style={styles.input}>
      <input onChange={changeStudent} name="isStudent" id="non_student" checked={!form.isStudent} type="radio" value="non_student"/>Non Student</label>
      <input onChange={changeValue} style={styles.input} name="institution" type="text" value={form?.institution} placeholder="Institute/Organization (Studying/Working/Social Org Part of)" required />
      <input onChange={changeValue} style={styles.input} name="questions" type="text" value={form?.questions} placeholder={askQuestion} />
      <Div style={styles.buttons}>
        <input form={"form"} style={styles.submit} type="submit" value="SUBMIT"/>
        <Button style={styles.button} onClick={() => setForm(defaultForm)}>Clear</Button>
      </Div>
    </form></>}
    {status === Status.Submitted &&
      <Div style={styles.submitted}>
        <TaskAlt color={"success"} fontSize={"large"}/><Text style={styles.submittedText}>Form Submitted</Text>
      </Div>}
  </Div>
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    padding: "2%",
    width: ["100%", "100%", "50%"],
    height: "100%",
    borderTop: "5px solid #ef7f1b",
    borderRadius: "1%"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "2%"
  },
  eventTitle: {
    fontSize: "xx-large"
  },
  input: {
    fontSize: "large",
    margin: "0.5% 0%",
    padding: "1%"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    color: "white",
    backgroundColor: "#ef7f1b"
  },
  venue: {
    display: "flex",
    alignItems: "center"
  },
  submit: {
    color: "white",
    borderRadius: "4px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "#ef7f1b"
  },
  loading: {
    opacity: 0.5,
    pointerEvents: "none"
  },
  loader: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    zIndex: 100
  },
  submitted: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    gap: "1%",
    width: "100%"
  },
  submittedText: {
    fontSize: "xx-large"
  }
} as const;

export default RegistrationForm;