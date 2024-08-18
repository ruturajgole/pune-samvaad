import { TaskAlt } from "@mui/icons-material";
import { BaseSyntheticEvent, useState } from "react";
import { submitContactForm } from "services/api";
import { Contact } from "services/models";
import { Loader } from "view/lib";
import { Button, Div, Text } from "view/lib/components";

enum Status {
  Unsubmitted,
  Submitting,
  Submitted
}

const ContactUs = () => {
  const empty: Contact = {
    name: "",
    email: "",
    mobile: "",
    query: ""
  };

  const [form, setForm] = useState<Contact>(empty);
  const [status, setStatus] = useState<Status>(Status.Unsubmitted);

  const onChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  const submit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const currentForm = e.target;

    if(!currentForm.checkValidity()){
      currentForm.reportValidity();
      return;
    }

    setStatus(Status.Submitting);

    const response = await submitContactForm(form);
    if(response === 200){
      setStatus(Status.Submitted);
    }
  }

  const clear = () => setForm(empty);

  const Form = () =>
    <Div style={styles.container}>
    <Text style={styles.title}>Contact Us Form</Text>
    <form id="form" onSubmit={submit} style={styles.form}>
      <input onChange={onChange} style={styles.input} type="text" name="name" placeholder="Full Name*" value={form.name} required/>
      <Div style={styles.contact}>
        <input onChange={onChange} style={styles.input} type="email" name="email" required placeholder="Email*" value={form.email}/>
        <input onChange={onChange} style={styles.input} type="text" name="mobile" required placeholder="Mobile*" value={form.mobile}/>
      </Div>
      <textarea onChange={onChange} rows={4} style={{...styles.input, resize: "none"}} name="query" placeholder="Additional Information (Optional)" value={form.query}/>
    </form>
    <Div style={styles.buttons}>
      <input form="form" style={styles.submit} type="submit" value="SUBMIT"/>
      <Button style={styles.button} onClick={clear}>Clear</Button>
    </Div>
  </Div>;

  return (status === Status.Unsubmitted && <Form />) ||
  (status === Status.Submitting && <Loading />) ||
  (status === Status.Submitted && <FormSubmitted />) ||
  <Text>Something Went Wrong</Text>;
}

const FormSubmitted = () =>
  <Div style={styles.submitted}>
    <TaskAlt color="success" fontSize="large" />
    <Text style={styles.submittedText}>Form Submitted</Text>
  </Div>

const Loading = () =>
  <Div style={styles.loader}>
    <Loader />
  </Div>

const styles = {
  container: {
    padding: "1%"
  },
  title: {
    fontSize: "xx-large"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "2%",
    padding: "1%"
  },
  contact: {
    display: "flex",
    flexDirection: ["column", "column", "row"],
    gap: "1%",
    justifyContent: "space-evenly"
  },
  input: {
    fontSize: "large",
    margin: "0.5% 0%",
    padding: "1%",
    flex: "1"
  },
  buttons: {
    display: "flex",
    padding: "1%",
    gap: "1%"
  },
  button: {
    color: "white",
    fontSize: "large",
    backgroundColor: "#ef7f1b"
  },
  submit: {
    color: "white",
    borderRadius: "4px",
    fontSize: "large",
    border: "none",
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
    flex: "1",
    gap: "1%",
    width: "100%"
  },
  submittedText: {
    fontSize: "xx-large"
  }
} as const;


export default ContactUs;